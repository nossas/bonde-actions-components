import type { State } from './machine'

import { useCallback, useEffect, useMemo } from 'react'
import { useMachine } from 'react-robot'

import { makePhoneCall } from './api'
import { ActiveCall } from './components/ActiveCall'
import { FailedCall } from './components/FailedCall'
import { FinishedCall } from './components/FinishedCall'
import { IdleCall } from './components/IdleCall'
import { RetryCall } from './components/RetryCall'
import { RingingCall } from './components/RingingCall'
import { machine } from './machine'

import './style.css'

function NOOP(): void { }

export interface ChildrenProps {
  state: State
  onClick: () => void
}

export interface PhoneTarget {
  label: string
  phoneNumber: string
}

export interface PhoneCallButtonProps {
  children?: (props: ChildrenProps) => JSX.Element
  targets: PhoneTarget[]
  userPhoneNumber: string
  onFail?: () => void
  onSuccess?: () => void
}

export function PhoneCallButton({
  children,
  targets,
  userPhoneNumber,
  onFail = NOOP,
  onSuccess = NOOP,
}: Readonly<PhoneCallButtonProps>): JSX.Element {
  const [{ name: state, context }, send] = useMachine(machine)

  const shuffledTargets = useMemo(() => {
    if (targets.length <= 1) {
      return targets
    }

    const shuffled = [...targets]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }, [targets])

  const target = shuffledTargets[context.retries % shuffledTargets.length]

  useEffect(() => {
    if (state === 'failed') {
      onFail()
    }
    else if (state === 'finished') {
      onSuccess()
    }
  }, [onFail, onSuccess, state])

  useEffect(() => {
    async function makeCall(): Promise<void> {
      await makePhoneCall(send, userPhoneNumber, target.phoneNumber)
    }

    if (state === 'ringing') {
      makeCall()
    }
  }, [send, state, target, userPhoneNumber])

  const startCall = useCallback(() => {
    send('call')
  }, [send])

  if (children) {
    return children({ state: state as State, onClick: startCall })
  }

  switch (state as State) {
    case 'active': {
      return (
        <ActiveCall target={target} />
      )
    }
    case 'failed': {
      return (
        <FailedCall />
      )
    }
    case 'finished': {
      return (
        <FinishedCall />
      )
    }
    case 'retry': {
      return (
        <RetryCall onRetry={startCall} />
      )
    }
    case 'ringing': {
      return (
        <RingingCall target={target} />
      )
    }
    case 'idle':
    default: {
      return (
        <IdleCall onCall={startCall} />
      )
    }
  }
}

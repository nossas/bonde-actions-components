import type { State } from './machine'

import { Button } from '@chakra-ui/react'
import { useCallback, useEffect, useMemo } from 'react'
import { useMachine } from 'react-robot'

import { makePhoneCall } from './api'
import { ActiveCall } from './components/ActiveCall'
import { FailedCall } from './components/FailedCall'
import { FinishedCall } from './components/FinishedCall'
import { RingingCall } from './components/RingingState'
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
  }, [target, userPhoneNumber, send, state])

  const startCall = useCallback(() => {
    send('call')
  }, [send])

  if (children) {
    return children({ state: state as State, onClick: startCall })
  }

  switch (state as State) {
    case 'active': {
      return (
        <div className="bonde-phone-call bonde-phone-call--active">
          <ActiveCall target={target} />
        </div>
      )
    }
    case 'failed': {
      return (
        <div className="bonde-phone-call bonde-phone-call--failed">
          <FailedCall />
        </div>
      )
    }
    case 'finished': {
      return (
        <div className="bonde-phone-call bonde-phone-call--finished">
          <FinishedCall />
        </div>
      )
    }
    case 'retry': {
      return (
        <div className="bonde-phone-call bonde-phone-call--retry">
          <Button variant="solid" onClick={startCall}>Tentar novamente</Button>
        </div>
      )
    }
    case 'ringing': {
      return (
        <div className="bonde-phone-call bonde-phone-call--ringing">
          <RingingCall target={target} />
        </div>
      )
    }
    case 'idle':
    default: {
      return (
        <div className="bonde-phone-call bonde-phone-call--idle">
          <Button variant="solid" onClick={startCall}>Ligar</Button>
        </div>
      )
    }
  }
}

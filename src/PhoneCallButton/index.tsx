import { useEffect, useMemo, useState } from 'react'

import { makePhoneCall } from './api'
import { CompletedCall } from './components/CompletedCall'
import { InitiatedCall } from './components/InitiatedCall'
import { InProgressCall } from './components/InProgressCall'
import { RingingCall } from './components/RingingCall'

import './style.css'

function NOOP(): void { }

export type TwilioState
  = | 'busy'
    | 'canceled'
    | 'completed'
    | 'failed'
    | 'idle'
    | 'in-progress'
    | 'initiated'
    | 'no-answer'
    | 'queued'
    | 'ringing'

export interface PhoneTarget {
  label: string
  phoneNumber: string
}

export interface PhoneCallButtonProps {
  children?: JSX.Element | JSX.Element[]
  script: string
  started: boolean
  targets: PhoneTarget[]
  userPhoneNumber: string
  onFail?: () => void
  onSuccess?: () => void
}

export function PhoneCallButton({
  children = undefined,
  script,
  started = true,
  targets,
  userPhoneNumber,
  onFail = NOOP,
  onSuccess = NOOP,
}: Readonly<PhoneCallButtonProps>): JSX.Element | null {
  const [state, setState] = useState<TwilioState>('idle')
  const [retries, setRetries] = useState(() => Math.ceil(targets.length * 1.5))

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

  const target = useMemo(() => {
    return shuffledTargets[retries % shuffledTargets.length]
  }, [shuffledTargets, retries])

  useEffect(() => {
    if (state === 'failed') {
      onFail()
    }
    else if (state === 'completed') {
      onSuccess()
    }
  }, [onFail, onSuccess, state])

  useEffect(() => {
    async function makeCall(): Promise<void> {
      await makePhoneCall(setState, userPhoneNumber, target.phoneNumber)
    }

    if (state === 'initiated') {
      makeCall()
    }
  }, [setState, state, target, userPhoneNumber])

  if (!started) {
    return null
  }

  switch (state) {
    case 'completed':
      return (
        <CompletedCall>
          {children}
        </CompletedCall>
      )
    case 'initiated':
    case 'queued':
      return (
        <InitiatedCall />
      )
    case 'in-progress':
      return (
        <InProgressCall script={script} target={target} />
      )
    case 'ringing':
      return (
        <RingingCall target={target} />
      )
    case 'busy':
    case 'canceled':
    case 'failed':
    case 'no-answer':
    case 'idle':
    default:
      return null
  }
}

import { useEffect, useMemo, useState } from 'react'
import { makePhoneCall } from './api'
import { Modal } from './components/Modal'
import { stateSwitcher } from './switcher'

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

export interface PhoneCallProps {
  children?: JSX.Element | JSX.Element[]
  script: string
  started: boolean
  targets: PhoneTarget[]
  userPhoneNumber: string
  onFail?: () => void
  onSuccess?: () => void
}

export interface PhoneCallModalProps {
  postActions?: JSX.Element | JSX.Element[]
  script: string
  target: PhoneTarget
  userPhoneNumber: string
}

export function PhoneCall({
  children = undefined,
  script,
  started = true,
  targets,
  userPhoneNumber,
  onFail = NOOP,
  onSuccess = NOOP,
}: Readonly<PhoneCallProps>): JSX.Element | null {
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

    if (started) {
      makeCall()
    }
  }, [setState, started, target, userPhoneNumber])

  if (!started) {
    return null
  }

  const modalDescriber = stateSwitcher(state)

  if (modalDescriber) {
    const modalProps: PhoneCallModalProps = {
      postActions: children,
      script,
      target,
      userPhoneNumber,
    }

    return (
      <Modal {...modalDescriber(modalProps)} />
    )
  }
  else {
    return null
  }
}

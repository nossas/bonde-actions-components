import type { BondeTheme } from '../shared/theme'

import { Theme } from 'bonde-components'
import { useCallback, useEffect, useMemo, useState } from 'react'
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
    | 'in-progress'
    | 'initiated'
    | 'no-answer'
    | 'queued'
    | 'ringing'

export type PhoneCallState = TwilioState | 'idle'

export interface PhoneTarget {
  label: string
  phoneNumber: string
}

export interface PhoneCallModalProps {
  canRetry: boolean
  postActions?: JSX.Element | JSX.Element[]
  script: string
  target: PhoneTarget
  theme: BondeTheme
  userPhoneNumber: string
  onDismiss: () => void
  onRetry: () => void
  onShare: () => void
}

export interface PhoneCallProps {
  children?: JSX.Element | JSX.Element[]
  script: string
  targets: PhoneTarget[]
  theme: BondeTheme
  userPhoneNumber: string
  onFail?: (state: PhoneCallState) => void
  onFinish?: (state: PhoneCallState) => void
  onSuccess?: () => void
}

export function PhoneCall({
  children = undefined,
  script,
  targets,
  theme = Theme,
  userPhoneNumber,
  onFail = NOOP,
  onFinish = NOOP,
  onSuccess = NOOP,
}: Readonly<PhoneCallProps>): JSX.Element | null {
  const [state, setState] = useState<PhoneCallState>('idle')
  const [sharing, setSharing] = useState(false)
  const [retries, setRetries] = useState(0)

  useEffect(() => {
    if (state === 'completed') {
      onSuccess()
    }
  }, [onSuccess, state])

  const shareCampaign = useCallback(() => {
    setSharing(true)
    onFail(state)
  }, [onFail, setSharing, state])

  const dismissCall = useCallback(() => {
    if (state !== 'completed' && !sharing) {
      onFail(state)
    }
    onFinish(state)
    setState('idle')
  }, [onFail, onFinish, setState, state, sharing])

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

  const canRetry = useMemo(() => {
    const maxRetries = Math.ceil(targets.length * 1.5)
    return retries < maxRetries
  }, [retries, targets])

  const retryCall = useCallback(() => {
    setState('idle')
    setRetries(retries => retries + 1)
  }, [setRetries, setState])

  useEffect(() => {
    async function makeCall(): Promise<void> {
      await makePhoneCall(setState, userPhoneNumber, target.phoneNumber)
    }

    makeCall()
  }, [setState, target, userPhoneNumber])

  const modalDescriber = stateSwitcher(state, sharing)

  if (modalDescriber) {
    const modalProps: PhoneCallModalProps = {
      canRetry,
      postActions: children,
      script,
      target,
      theme,
      userPhoneNumber,
      onDismiss: dismissCall,
      onRetry: retryCall,
      onShare: shareCampaign,
    }

    return (
      <Modal
        theme={theme}
        onDismiss={dismissCall}
        {...modalDescriber(modalProps)}
      />
    )
  }
  else {
    return null
  }
}

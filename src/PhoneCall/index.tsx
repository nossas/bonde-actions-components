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

export type PhoneCallState = TwilioState | 'idle' | 'share'

export interface PhoneTarget {
  label: string
  phoneNumber: string
}

export interface PhoneCallModalProps {
  postActions?: JSX.Element | JSX.Element[]
  script: string
  target: PhoneTarget
  theme: BondeTheme
  userPhoneNumber: string
  onCancel: () => void
  onRetry: () => void
  onShare: () => void
}

export interface PhoneCallProps {
  children?: JSX.Element | JSX.Element[]
  script: string
  targets: PhoneTarget[]
  theme: BondeTheme
  userPhoneNumber: string
  onCancel?: () => void
  onFail?: () => void
  onSuccess?: () => void
}

export function PhoneCall({
  children = undefined,
  script,
  targets,
  theme = Theme,
  userPhoneNumber,
  onCancel = NOOP,
  onFail = NOOP,
  onSuccess = NOOP,
}: Readonly<PhoneCallProps>): JSX.Element | null {
  const [state, setState] = useState<PhoneCallState>('idle')
  const [retries, setRetries] = useState(0)

  const dismiss = useCallback(() => {
    setState('idle')
  }, [setState])

  const retryCall = useCallback(() => {
    const maxRetries = Math.ceil(targets.length * 1.5)

    if (retries < maxRetries) {
      setRetries(retries => retries + 1)
    }
    else {
      onFail()
    }
  }, [onFail, retries, setRetries, targets])

  const shareCampaign = useCallback(() => {
    setState('share')
  }, [setState])

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
    if (state === 'completed') {
      onSuccess()
    }
  }, [onSuccess, state])

  useEffect(() => {
    async function makeCall(): Promise<void> {
      await makePhoneCall(setState, userPhoneNumber, target.phoneNumber)
    }

    makeCall()
  }, [setState, target, userPhoneNumber])

  const modalDescriber = stateSwitcher(state)

  if (modalDescriber) {
    const modalProps: PhoneCallModalProps = {
      onCancel,
      onRetry: retryCall,
      onShare: shareCampaign,
      postActions: children,
      script,
      target,
      theme,
      userPhoneNumber,
    }

    return (
      <Modal theme={theme} onDismiss={dismiss} {...modalDescriber(modalProps)} />
    )
  }
  else {
    return null
  }
}

import type { FunctionComponent } from 'react'
import type { PhoneCallAction } from './api'
import type { PhoneActionPayload, PhonePressureActivist, PhoneTarget, TwilioState } from './types'

import { ModalFooter } from '@chakra-ui/react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { bondePhoneCall } from './api'
import { BusyCall } from './components/BusyCall'
import { CanceledCall } from './components/CanceledCall'
import { CompletedCall } from './components/CompletedCall'
import { FailedCall } from './components/FailedCall'
import { InitiatedCall } from './components/InitiatedCall'
import { InProgressCall } from './components/InProgressCall'
import { Modal } from './components/Modal'
import { NoAnswerCall } from './components/NoAnswerCall'
import { RetryButton } from './components/RetryButton'
import { RingingCall } from './components/RingingCall'
import { ShareCampaign } from './components/ShareCampaign'

import './style.css'

function NOOP(): void { }

export type PhoneCallState = TwilioState | 'idle'

export interface PhoneCallModalProps {
  activist: PhonePressureActivist
  brandColor: string
  guideline: string
  linkColor: string
  postActionHtml: string
  target: PhoneTarget
  onDismiss: () => void
  onShare: () => void
}

export interface PhoneCallProps {
  action?: PhoneCallAction
  activist: PhonePressureActivist
  guideline: string
  linkColor?: string
  mainColor?: string
  postActionHtml?: string
  targets: PhoneTarget[]
  widgetId?: number
  onFail?: (state: PhoneCallState) => void
  onFinish?: (state: PhoneCallState) => void
  onSuccess?: () => void
}

function chooseComponent(state: TwilioState, sharing: boolean): FunctionComponent<PhoneCallModalProps> {
  if (sharing) {
    return ShareCampaign
  }

  switch (state) {
    case 'busy':
      return BusyCall
    case 'canceled':
      return CanceledCall
    case 'completed':
      return CompletedCall
    case 'failed':
      return FailedCall
    case 'initiated':
    case 'queued':
      return InitiatedCall
    case 'in-progress':
      return InProgressCall
    case 'no-answer':
      return NoAnswerCall
    case 'ringing':
      return RingingCall
  }
}

export function PhoneCall({
  action: phoneCall = bondePhoneCall,
  activist,
  guideline,
  linkColor = '#1D3D90',
  mainColor: brandColor = '#A42828',
  postActionHtml = '',
  targets,
  widgetId = 0,
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

  const target = shuffledTargets[retries % shuffledTargets.length]

  const retriesAvailable = useMemo(() => {
    const maxRetries = Math.ceil(targets.length * 1.5)
    return retries < maxRetries
  }, [retries, targets])

  const retryCall = useCallback(() => {
    setState('idle')
    setRetries(retries => retries + 1)
  }, [setRetries, setState])

  const actionPayload: PhoneActionPayload = useMemo(() => {
    return {
      activist,
      input: {
        custom_fields: {
          status: 'queued',
          target,
        },
      },
      widget_id: widgetId,
    }
  }, [activist, target, widgetId])

  useEffect(() => {
    async function makePhoneCall(): Promise<void> {
      await phoneCall(setState, actionPayload)
    }

    makePhoneCall()
  }, [actionPayload, phoneCall, setState])

  if (state === 'idle') {
    return null
  }

  const ModalChildren = chooseComponent(state, sharing)

  const isErrorState = ['busy', 'canceled', 'failed', 'no-answer'].includes(state)
  const canDismiss = sharing || isErrorState || state === 'completed'
  const canRetry = isErrorState && retriesAvailable && !sharing

  return (
    <Modal
      canDismiss={canDismiss}
      className={`bonde-phone-call bonde-phone-call--${state}`}
      onDismiss={dismissCall}
    >
      <ModalChildren
        activist={activist}
        brandColor={brandColor}
        guideline={guideline}
        linkColor={linkColor}
        postActionHtml={postActionHtml}
        target={target}
        onDismiss={dismissCall}
        onShare={shareCampaign}
      />
      <ModalFooter>
        {canRetry && (
          <RetryButton backgroundColor={brandColor} onRetry={retryCall} />
        )}
      </ModalFooter>
    </Modal>
  )
}

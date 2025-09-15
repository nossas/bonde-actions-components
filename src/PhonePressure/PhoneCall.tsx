import type { CSSProperties, FunctionComponent } from 'react'
import type { SetState } from '../shared/react'
import type { PhoneCallAction } from './api'
import type { PhoneCallState, PhonePressureAction, PhonePressureActivist, PhoneTarget } from './types'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { NOOP } from '../shared/constants'
import { defaultPhoneCall } from './api'
import { BusyCall } from './components/BusyCall'
import { CanceledCall } from './components/CanceledCall'
import { CompletedCall } from './components/CompletedCall'
import { FailedCall } from './components/FailedCall'
import { InitiatedCall } from './components/InitiatedCall'
import { InProgressCall } from './components/InProgressCall'
import { Modal } from './components/Modal'
import { ModalFooter } from './components/ModalFooter'
import { NoAnswerCall } from './components/NoAnswerCall'
import { RetryButton } from './components/RetryButton'
import { RingingCall } from './components/RingingCall'
import { ShareCampaign } from './components/ShareCampaign'
import { isErrorState, isFinalState } from './utils/states'

import './style.css'

export interface PhoneCallModalProps {
  activist: PhonePressureActivist
  brandColor: string
  guideline: string
  postActionHtml: string
  target: PhoneTarget
  phoneNumber?: string
  onDismiss: () => void
  onShare: () => void
}

export interface PhoneCallProps {
  action?: PhoneCallAction
  activist: PhonePressureActivist
  appElement?: HTMLElement
  guideline: string
  linkColor?: string
  mainColor?: string
  postActionHtml?: string
  targets: PhoneTarget[]
  widgetId?: number
  phoneNumber?: string
  onFail?: (state: PhoneCallState) => void
  onFinish?: (state: PhoneCallState, reset?: boolean) => void
  onSuccess?: () => void
}

function chooseComponent(state: PhoneCallState, sharing: boolean): FunctionComponent<PhoneCallModalProps> {
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
  action: phoneCall = defaultPhoneCall,
  activist,
  appElement,
  guideline,
  linkColor = '#1D3D90',
  mainColor: brandColor = '#A42828',
  postActionHtml = '',
  targets,
  widgetId = 0,
  phoneNumber,
  onFail = NOOP,
  onFinish = NOOP,
  onSuccess = NOOP,
}: Readonly<PhoneCallProps>): JSX.Element | null {
  const [state, setState] = useState<PhoneCallState | null>(null)
  const [sharing, setSharing] = useState(false)
  const [retries, setRetries] = useState(0)

  useEffect(() => {
    if (state === 'completed') {
      onSuccess()
    }
  }, [onSuccess, state])

  const shareCampaign = useCallback(() => {
    setSharing(true)
    onFail(state!)
  }, [onFail, setSharing, state])

  const dismissCall = useCallback(() => {
    if (state !== 'completed' && !sharing) {
      onFail(state!)
    } else if (state !== 'completed' && !sharing && canRetry) {
      onFinish(state!)
    } else {
      onFinish(state!, true)
    }
    setState(null)
  }, [onFail, onFinish, setState, sharing, state])

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
    setState(null)
    setRetries(retries => retries + 1)
  }, [setRetries, setState])

  const actionPayload: PhonePressureAction = useMemo(() => {
    return {
      activist,
      target,
      widget_id: widgetId,
    }
  }, [activist, target, widgetId])

  useEffect(() => {
    async function makePhoneCall(): Promise<void> {
      await phoneCall(actionPayload, setState as SetState<PhoneCallState>)
    }

    makePhoneCall()
  }, [actionPayload, phoneCall, setState])

  if (!state) {
    return null
  }

  const ModalChildren = chooseComponent(state, sharing)

  const inErrorState = isErrorState(state)
  const canDismiss = sharing || isFinalState(state)
  const canRetry = inErrorState && retriesAvailable && !sharing

  return (
    <Modal
      appElement={appElement}
      canDismiss={canDismiss}
      className={`bonde-phone-call bonde-phone-call--${state}`}
      style={{ '--bonde-action-brand-color': brandColor, '--bonde-action-link-color': linkColor } as CSSProperties}
      onDismiss={dismissCall}
    >
      <ModalChildren
        activist={activist}
        brandColor={brandColor}
        guideline={guideline}
        postActionHtml={postActionHtml}
        target={target}
        phoneNumber={phoneNumber}
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

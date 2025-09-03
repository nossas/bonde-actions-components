import type { HTMLProps } from 'react'
import type { ActionFormHandle } from '../ActionForm/ActionForm'
import type { ActivistInput } from '../shared/types'
import type { PhoneCallAction } from './api'
import type { PhoneCallState, PhonePressureActivist, PhoneTarget } from './types'

import { useCallback, useRef, useState } from 'react'
import { ActionForm } from '../ActionForm'
import { NOOP } from '../shared/constants'
import { defaultPhoneCall } from './api'
import { PhoneCall } from './PhoneCall'
import { useNearestRoot } from './utils/root'

export interface PhonePressureFormProps extends Omit<HTMLProps<HTMLDivElement>, 'action'> {
  action?: PhoneCallAction
  guideline: string
  linkColor?: string
  mainColor?: string
  postActionHtml?: string
  targets: PhoneTarget[]
  widgetId: number
  onFail?: (state: PhoneCallState) => void
  onFinish?: (state: PhoneCallState) => void
  onSuccess?: () => void
}

const FIELDS: Array<keyof ActivistInput> = ['email', 'first_name', 'last_name', 'phone']

export function PhonePressureForm({
  action = defaultPhoneCall,
  guideline,
  linkColor = '#1D3D90',
  mainColor = '#A42828',
  postActionHtml = '',
  targets,
  widgetId,
  onFail = NOOP,
  onFinish = NOOP,
  onSuccess = NOOP,
  ...layoutProps
}: Readonly<PhonePressureFormProps>): JSX.Element {
  const [activist, setActivist] = useState<PhonePressureActivist | null>(null)
  const [calling, setCalling] = useState(false)

  const formRef = useRef<ActionFormHandle>(null)
  const [divEl, setDivEl] = useState<HTMLDivElement | null>(null)
  const appEl = useNearestRoot(divEl)

  const endCall = useCallback((state: PhoneCallState, reset: boolean = false) => {
    setCalling(false)
    onFinish(state)

    if (reset) formRef.current?.reset();
  }, [formRef, onFinish, setCalling])

  const onSubmit = useCallback((activist: ActivistInput) => {
    setActivist(activist as PhonePressureActivist)
    setCalling(true)
  }, [setActivist, setCalling])

  return (
    <div className="bonde-phone-pressure-form" ref={setDivEl} {...layoutProps}>
      <ActionForm
        brandColor={mainColor}
        fields={FIELDS}
        ref={formRef}
        submitLabel="Ligar"
        widgetId={widgetId}
        onSubmit={onSubmit}
      >
        {() =>
          <div className="bonde-action-field">
            <label>Roteiro para a ligação</label>
            <div className="bonde-action-guideline" dangerouslySetInnerHTML={{__html: guideline }} />
          </div>
        }
      </ActionForm>
      {(activist && calling) && (
        <PhoneCall
          action={action}
          activist={activist}
          appElement={appEl}
          guideline={guideline}
          linkColor={linkColor}
          mainColor={mainColor}
          postActionHtml={postActionHtml}
          targets={targets}
          widgetId={widgetId}
          onFail={onFail}
          onFinish={endCall}
          onSuccess={onSuccess}
        />
      )}
    </div>
  )
}

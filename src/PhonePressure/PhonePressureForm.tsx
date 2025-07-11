import type { LayoutProps } from '@chakra-ui/react'
import type { ActivistInput } from '../shared/types'
import type { PhoneCallAction } from './api'
import type { PhoneCallState } from './PhoneCall'
import type { PhonePressureActivist, PhoneTarget } from './types'

import { Box } from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import { ActionForm } from '../ActionForm'
import { bondePhoneCall } from './api'
import { PhoneCall } from './PhoneCall'

export interface PhonePressureFormProps extends LayoutProps {
  action?: PhoneCallAction
  guideline: string
  linkColor?: string
  mainColor?: string
  postActionHtml?: string
  targets: PhoneTarget[]
  widgetId: number
  onFail?: (state: PhoneCallState) => void
  onSuccess?: () => void
}

function NOOP(): void { }

const FIELDS: Array<keyof ActivistInput> = ['email', 'name', 'phone']

export function PhonePressureForm({
  action = bondePhoneCall,
  guideline,
  linkColor = '#1D3D90',
  mainColor = '#A42828',
  postActionHtml = '',
  targets,
  widgetId,
  onFail = NOOP,
  onSuccess = NOOP,
  ...layoutProps
}: Readonly<PhonePressureFormProps>): JSX.Element {
  const [activist, setActivist] = useState<PhonePressureActivist | null>(null)
  const [calling, setCalling] = useState(false)

  const endCall = useCallback(() => {
    setCalling(false)
  }, [setCalling])

  const onSubmit = useCallback((activist: ActivistInput) => {
    setActivist(activist as PhonePressureActivist)
    setCalling(true)
  }, [setActivist, setCalling])

  return (
    <Box className="bonde-phone-pressure-form" {...layoutProps}>
      <ActionForm
        brandColor={mainColor}
        fields={FIELDS}
        submitLabel="Ligar"
        widgetId={widgetId}
        onSubmit={onSubmit}
      />
      {(activist && calling) && (
        <PhoneCall
          action={action}
          activist={activist}
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
    </Box>
  )
}

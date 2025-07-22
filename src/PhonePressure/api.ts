import type { SetState } from '../shared/react'
import type { PhoneActionPayload, PhoneCallState } from './types'

import { GET, POST } from '../shared/rest'
import { isFinalState } from './utils/states'

export type PhoneCallAction = (payload: PhoneActionPayload, setState: SetState<PhoneCallState>) => Promise<void>

export interface PhoneCallRequest {
  activist_number: string
  target_number: string
  widget_id: number
}

export interface PhoneCallResponse {
  call: string
  status: PhoneCallState
}

async function startTwilioCall(baseUrl: string, payload: PhoneActionPayload): Promise<PhoneCallResponse> {
  const body: PhoneCallRequest = {
    activist_number: payload.activist.phone,
    target_number: payload.input.custom_fields.target.phone,
    widget_id: payload.widget_id,
  }
  return POST<PhoneCallResponse>(new URL('/phone/call', baseUrl), body)
}

async function pollTwilioCallStatus(baseUrl: string, call: string): Promise<PhoneCallResponse> {
  return GET<PhoneCallResponse>(new URL('/phone/status', baseUrl), { call })
}

export function configureBondePhoneCall(baseUrl: string): PhoneCallAction {
  return async function bondePhoneCall(payload, setState) {
    const { call, status } = await startTwilioCall(baseUrl, payload)
    setState(status)

    const interval = window.setInterval(async () => {
      const { status } = await pollTwilioCallStatus(baseUrl, call)
      setState(status)
      if (isFinalState(status)) {
        clearInterval(interval)
      }
    }, 2000)
  }
}

export const defaultPhoneCall = configureBondePhoneCall('http://localhost:8000')

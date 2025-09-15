import type { SetState } from '../shared/react'
import type { PhoneCallState, PhonePressureAction } from './types'

import { GET, POST } from '../shared/rest'
import { isFinalState } from './utils/states'

export type PhoneCallAction = (payload: PhonePressureAction, setState: SetState<PhoneCallState>) => Promise<void>

export interface PhoneCallResponse {
  call_id: number
  status: PhoneCallState
}

async function startTwilioCall(baseUrl: string, payload: PhonePressureAction): Promise<PhoneCallResponse> {
  console.log("startTwilioCall", payload)
  // const body: any = {
  //   from_phone_number: `+55${payload.activist.phone}`,
  //   to_phone_number: payload.input.custom_fields.target.phone
  // }
  return POST<PhoneCallResponse>(new URL('/v1/phone/call', baseUrl), payload)
}

async function pollTwilioCallStatus(baseUrl: string, call: number): Promise<PhoneCallResponse> {
  return GET<PhoneCallResponse>(new URL(`/v1/phone/status/${call}`, baseUrl), {})
}

export function configureBondePhoneCall(baseUrl: string): PhoneCallAction {
  return async function bondePhoneCall(payload, setState) {
    const { call_id: call, status } = await startTwilioCall(baseUrl, payload)
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

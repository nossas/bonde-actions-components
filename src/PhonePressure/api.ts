import type { SetState } from '../shared/react'
import type { PhoneCallState, PhonePressureAction } from './types'

import { GET, POST } from '../shared/rest'
import { isFinalState } from './utils/states'

export type PhoneCallAction = (payload: PhonePressureAction, setState: SetState<PhoneCallState>) => Promise<void>

export interface PhoneCallResponse {
  call: string
  status: PhoneCallState
}

async function startTwilioCall(baseUrl: string, payload: PhonePressureAction): Promise<PhoneCallResponse> {
  return POST<PhoneCallResponse>(new URL('/phone/call', baseUrl), payload)
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

import type { WidgetActionPayload } from '../shared/types'

export interface PhoneTarget {
  name: string
  phone: string
}

export type PhoneCallState
  = | 'busy'
    | 'canceled'
    | 'completed'
    | 'failed'
    | 'in-progress'
    | 'initiated'
    | 'no-answer'
    | 'queued'
    | 'ringing'

export interface PhonePressureAction extends WidgetActionPayload {
  widget_id: number

  activist: {
    name: string
    email: string
    phone: string
  }

  target: {
    name: string
    phone: string
  }
}

export type PhonePressureActivist = PhonePressureAction['activist']

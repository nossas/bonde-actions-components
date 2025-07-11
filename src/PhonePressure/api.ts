import type { SetState } from '../shared/react'
import type { PhoneCallState } from './PhoneCall'
import type { PhoneActionPayload } from './types'

import { sleep } from '../shared/tests'

export type PhoneCallAction = (setState: SetState<PhoneCallState>, payload: PhoneActionPayload) => Promise<void>

export async function bondePhoneCall(setState: SetState<PhoneCallState>, _payload: PhoneActionPayload): Promise<void> {
  // @TODO
  await sleep(1000)
  setState('ringing')
  await sleep(3000)
  setState('in-progress')
  await sleep(3000)
  setState('completed')
}

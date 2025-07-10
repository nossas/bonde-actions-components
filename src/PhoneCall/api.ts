import type { SetState } from '../shared/react'
import type { PhoneCallState } from './PhoneCall'

import { sleep } from '../shared/tests'

export type PhoneCallAction = (setState: SetState<PhoneCallState>, userPhone: string, targetPhone: string) => Promise<void>

export async function bondePhoneCall(setState: SetState<PhoneCallState>, _userPhone: string, _targetPhone: string): Promise<void> {
  // @TODO
  await sleep(1000)
  setState('ringing')
  await sleep(3000)
  setState('in-progress')
  await sleep(3000)
  setState('completed')
}

import type { PhoneCallState } from '.'
import type { SetState } from '../shared/react'

import { sleep } from '../shared/tests'

export type PhoneCallAction = (setState: SetState<PhoneCallState>, userPhoneNumber: string, targetPhoneNumber: string) => Promise<void>

export async function bondePhoneCall(setState: SetState<PhoneCallState>, _userPhoneNumber: string, _targetPhoneNumber: string): Promise<void> {
  // @TODO
  await sleep(1000)
  setState('ringing')
  await sleep(3000)
  setState('in-progress')
  await sleep(3000)
  setState('completed')
}

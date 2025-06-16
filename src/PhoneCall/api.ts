import type { PhoneCallState } from '.'
import type { SetState } from '../shared/react'

import { sleep } from '../shared/tests'

export async function makePhoneCall(setState: SetState<PhoneCallState>, _userPhoneNumber: string, _targetPhoneNumber: string): Promise<boolean> {
  // @TODO
  await sleep(3000)
  setState('ringing')
  await sleep(3000)
  if (Math.random() > 0.5) {
    setState('failed')
    return false
  }
  else {
    setState('in-progress')
    await sleep(3000)
    setState('completed')
    return true
  }
}

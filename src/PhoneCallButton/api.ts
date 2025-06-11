import type { TwilioState } from '.'
import type { SetState } from '../shared/react'

export async function makePhoneCall(setState: SetState<TwilioState>, userPhoneNumber: string, targetPhoneNumber: string): Promise<boolean> {
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
    sleep(3000)
    setState('completed')
    return true
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

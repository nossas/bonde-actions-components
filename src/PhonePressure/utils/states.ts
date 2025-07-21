import type { PhoneCallState } from '../types'

export function isErrorState(state: PhoneCallState): boolean {
  switch (state) {
    case 'busy':
    case 'canceled':
    case 'failed':
    case 'no-answer':
      return true
    default:
      return false
  }
}

export function isFinalState(state: PhoneCallState): boolean {
  if (state === 'completed') {
    return true
  }
  else {
    return isErrorState(state)
  }
}

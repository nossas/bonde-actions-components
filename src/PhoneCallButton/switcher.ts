import type { PhoneCallModalProps, TwilioState } from '.'
import type { ModalDescriber } from './components/Modal'

import { CompletedCall } from './components/CompletedCall'
import { InitiatedCall } from './components/InitiatedCall'
import { InProgressCall } from './components/InProgressCall'
import { RingingCall } from './components/RingingCall'

export function stateSwitcher(state: TwilioState): ((props: PhoneCallModalProps) => ModalDescriber) | null {
  switch (state) {
    case 'completed':
      return CompletedCall
    case 'initiated':
    case 'queued':
      return InitiatedCall
    case 'in-progress':
      return InProgressCall
    case 'ringing':
      return RingingCall
    case 'busy':
    case 'canceled':
    case 'failed':
    case 'no-answer':
    case 'idle':
    default:
      return null
  }
}

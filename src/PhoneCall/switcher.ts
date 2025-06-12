import type { PhoneCallModalProps, TwilioState } from '.'
import type { ModalDescriber } from './components/Modal'

import { BusyCall } from './components/BusyCall'
import { CanceledCall } from './components/CanceledCall'
import { CompletedCall } from './components/CompletedCall'
import { FailedCall } from './components/FailedCall'
import { InitiatedCall } from './components/InitiatedCall'
import { InProgressCall } from './components/InProgressCall'
import { NoAnswerCall } from './components/NoAnswerCall'
import { RingingCall } from './components/RingingCall'

export function stateSwitcher(state: TwilioState): ((props: PhoneCallModalProps) => ModalDescriber) | null {
  switch (state) {
    case 'busy':
      return BusyCall
    case 'canceled':
      return CanceledCall
    case 'completed':
      return CompletedCall
    case 'failed':
      return FailedCall
    case 'initiated':
    case 'queued':
      return InitiatedCall
    case 'in-progress':
      return InProgressCall
    case 'no-answer':
      return NoAnswerCall
    case 'ringing':
      return RingingCall
    case 'idle':
    default:
      return null
  }
}

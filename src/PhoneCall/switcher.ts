import type { PhoneCallModalProps, PhoneCallState } from '.'
import type { ModalDescriber } from './components/Modal'

import { BusyCall } from './components/BusyCall'
import { CanceledCall } from './components/CanceledCall'
import { CompletedCall } from './components/CompletedCall'
import { FailedCall } from './components/FailedCall'
import { InitiatedCall } from './components/InitiatedCall'
import { InProgressCall } from './components/InProgressCall'
import { NoAnswerCall } from './components/NoAnswerCall'
import { RingingCall } from './components/RingingCall'
import { ShareCampaign } from './components/ShareCampaign'

export function stateSwitcher(state: PhoneCallState, sharing: boolean): ((props: PhoneCallModalProps) => ModalDescriber) | null {
  if (sharing) {
    return ShareCampaign
  }

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
      return null
  }
}

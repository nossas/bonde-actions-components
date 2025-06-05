import type { PhoneTarget } from '..'
import type { State } from '../machine'

import { ActiveCall } from '../components/ActiveCall'
import { FailedCall } from '../components/FailedCall'
import { FinishedCall } from '../components/FinishedCall'
import { IdleCall } from '../components/IdleCall'
import { RetryCall } from '../components/RetryCall'
import { RingingCall } from '../components/RingingCall'

import '../style.css'

function NOOP(): void { }

const TARGET: PhoneTarget = {
  label: 'Sen. Fulano de Tal',
  phoneNumber: '+55 99 99999-9999',
}

export interface PhoneCallStatesProps {
  state: State
}

export function PhoneCallStates({ state }: Readonly<PhoneCallStatesProps>): JSX.Element {
  switch (state) {
    case 'active': {
      return (
        <ActiveCall target={TARGET} />
      )
    }
    case 'failed': {
      return (
        <FailedCall />
      )
    }
    case 'finished': {
      return (
        <FinishedCall />
      )
    }
    case 'retry': {
      return (
        <RetryCall onRetry={NOOP} />
      )
    }
    case 'ringing': {
      return (
        <RingingCall target={TARGET} />
      )
    }
    case 'idle':
    default: {
      return (
        <IdleCall onCall={NOOP} />
      )
    }
  }
}

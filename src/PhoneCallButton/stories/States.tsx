import type { PhoneTarget, TwilioState } from '..'

import { CompletedCall } from '../components/CompletedCall'
import { InitiatedCall } from '../components/InitiatedCall'
import { InProgressCall } from '../components/InProgressCall'
import { RingingCall } from '../components/RingingCall'

import '../style.css'

function NOOP(): void { }

const SCRIPT = 'Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!'

const TARGET: PhoneTarget = {
  label: 'Sen. Fulano de Tal',
  phoneNumber: '+55 99 99999-9999',
}

export interface PhoneCallStatesProps {
  state: TwilioState
}

export function PhoneCallStates({ state }: Readonly<PhoneCallStatesProps>): JSX.Element | null {
  switch (state) {
    case 'completed':
      return (
        <CompletedCall />
      )
    case 'initiated':
    case 'queued':
      return (
        <InitiatedCall />
      )
    case 'in-progress':
      return (
        <InProgressCall script={SCRIPT} target={TARGET} />
      )
    case 'ringing':
      return (
        <RingingCall target={TARGET} />
      )
    case 'busy':
    case 'canceled':
    case 'failed':
    case 'no-answer':
    case 'idle':
    default:
      return null
  }
}

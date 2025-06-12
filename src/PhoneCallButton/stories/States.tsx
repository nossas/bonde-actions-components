import type { PhoneCallModalProps, TwilioState } from '..'

import { Modal } from '../components/Modal'
import { stateSwitcher } from '../switcher'

import '../style.css'

const PROPS: PhoneCallModalProps = {
  script: 'Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!',
  target: {
    label: 'Sen. Fulano de Tal',
    phoneNumber: '+55 99 99999-9999',
  },
  userPhoneNumber: '+55 99 90000-0000',
}

export interface PhoneCallStatesProps {
  state: TwilioState
}

export function PhoneCallStates({ state }: Readonly<PhoneCallStatesProps>): JSX.Element | null {
  const modalDescriber = stateSwitcher(state)

  if (modalDescriber) {
    return (
      <Modal {...modalDescriber(PROPS)} />
    )
  }
  else {
    return null
  }
}

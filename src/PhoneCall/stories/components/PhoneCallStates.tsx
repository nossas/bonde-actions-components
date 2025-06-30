import type { PhoneCallModalProps, PhoneCallState } from '../..'

import { action } from '@storybook/addon-actions'
import { Theme } from 'bonde-components'
import { Modal } from '../../components/Modal'
import { stateSwitcher } from '../../switcher'
import { ShareButtons } from './ShareButtons'

import '../../style.css'

const PROPS: PhoneCallModalProps = {
  postActions: <ShareButtons theme={Theme} />,
  script: 'Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!',
  target: {
    label: 'Sen. Fulano de Tal',
    phoneNumber: '+55 99 99999-9999',
  },
  theme: Theme,
  userPhoneNumber: '+55 99 90000-0000',
  onRetry: action('onRetry'),
  onShare: action('onShare'),
}

export interface PhoneCallStatesProps {
  state: PhoneCallState
}

export function PhoneCallStates({ state }: Readonly<PhoneCallStatesProps>): JSX.Element | null {
  const modalDescriber = stateSwitcher(state)

  if (modalDescriber) {
    return (
      <Modal theme={Theme} onDismiss={action('onDismiss')} {...modalDescriber(PROPS)} />
    )
  }
  else {
    return null
  }
}

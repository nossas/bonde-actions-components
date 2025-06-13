import type { PhoneCallModalProps } from '..'
import type { ModalDescriber } from './Modal'

import { FaArrowRight } from 'react-icons/fa'

export function RingingCall({ target }: PhoneCallModalProps): ModalDescriber {
  return {
    title: 'Chamando a pessoa responsável',
    icon: FaArrowRight,
    canDismiss: false,
    className: 'bonde-phone-call bonde-phone-call--ringing',
    content: (
      <>
        <p>{`Você atendeu a nossa ligação! Agora estamos tentando falar com ${target.label}`}</p>
        <p><strong>Aguarde na linha. Vamos conectar assim que o alvo atender.</strong></p>
      </>
    ),
  }
}

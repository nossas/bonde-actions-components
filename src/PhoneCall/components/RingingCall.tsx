import type { PhoneCallModalProps } from '..'
import type { ModalDescriber } from './Modal'

import { VStack } from '@chakra-ui/react'
import { BsArrowRight } from 'react-icons/bs'

export function RingingCall({ target }: PhoneCallModalProps): ModalDescriber {
  return {
    title: 'Chamando a pessoa responsável',
    icon: BsArrowRight,
    canDismiss: false,
    className: 'bonde-phone-call bonde-phone-call--ringing',
    content: (
      <VStack>
        <p>{`Você atendeu a nossa ligação! Agora estamos tentando falar com ${target.label}.`}</p>
        <p><strong>Aguarde na linha. Vamos conectar assim que o alvo atender.</strong></p>
      </VStack>
    ),
  }
}

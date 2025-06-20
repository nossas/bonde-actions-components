import type { ModalDescriber } from './Modal'

import { StackDivider, VStack } from '@chakra-ui/react'
import { BsTelephoneFill } from 'react-icons/bs'

export function InitiatedCall(): ModalDescriber {
  return {
    title: 'Estamos te ligando agora!',
    icon: BsTelephoneFill,
    canDismiss: false,
    className: 'bonde-phone-call bonde-phone-call--initiated',
    content: (
      <VStack divider={<StackDivider />}>
        <VStack>
          <p>
            {'Você vai receber uma ligação do nosso número. '}
            <strong>Atenda o telefone para continuar.</strong>
          </p>
          <p>Assim que a chamada for atendida, vamos conectar com a pessoa responsável.</p>
        </VStack>
        <p>
          {'O número pode começar com [XX]. '}
          <strong>Fique com o telefone por perto.</strong>
        </p>
      </VStack>
    ),
  }
}

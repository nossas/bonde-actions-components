import type { PhoneCallModalProps } from '..'
import type { ModalDescriber } from './Modal'

import { Button, Flex, StackDivider, VStack } from '@chakra-ui/react'
import { BsPencilSquare, BsTelephoneXFill } from 'react-icons/bs'
import { RetryButton } from './RetryButton'

export function CanceledCall({ onRetry, userPhoneNumber }: PhoneCallModalProps): ModalDescriber {
  return {
    title: 'A chamada não foi completada',
    icon: BsTelephoneXFill,
    canDismiss: true,
    className: 'bonde-phone-call bonde-phone-call--canceled',
    content: (
      <VStack divider={<StackDivider />}>
        <p>A ligação foi interrompida — isso pode ter acontecido por instabilidade na rede ou encerramento da chamada. Mas tudo bem, você pode tentar novamente.</p>
        <Flex align="center" gap={4} justify="start">
          <p>{`Número informado: ${userPhoneNumber}`}</p>
          <Button type="button" variant="link" leftIcon={<BsPencilSquare />}>
            Alterar número
          </Button>
        </Flex>
        <p>Se estiver tudo certo, é só clicar no botão abaixo e ficar de olho no celular!</p>
      </VStack>
    ),
    footer: (
      <RetryButton onRetry={onRetry} />
    ),
  }
}

import type { PhoneCallModalProps } from '..'
import type { ModalDescriber } from './Modal'

import { Button, Flex, Icon, StackDivider, VStack } from '@chakra-ui/react'
import { BsInfoCircle, BsTelephoneXFill } from 'react-icons/bs'
import { RetryButton } from './RetryButton'

export function BusyCall({ onRetry, target }: PhoneCallModalProps): ModalDescriber {
  return {
    title: 'A linha estava ocupada',
    icon: BsTelephoneXFill,
    canDismiss: true,
    className: 'bonde-phone-call bonde-phone-call--busy',
    content: (
      <VStack divider={<StackDivider />}>
        <p>{`Não conseguimos completar a ligação porque o número de ${target.label} estava ocupado. Aguarde alguns minutos e tente de novo clicão no botão abaixo.`}</p>
        <Flex align="center" gap={2}>
          <Icon as={BsInfoCircle} />
          <p>
            {'Se continuar ocupado, uma boa alternativa é '}
            <Button type="button" variant="link">
              compartilhar a campanha
            </Button>
            .
          </p>
        </Flex>
      </VStack>
    ),
    footer: (
      <RetryButton onRetry={onRetry} />
    ),
  }
}

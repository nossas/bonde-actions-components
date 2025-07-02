import type { PhoneCallModalProps } from '..'
import type { ModalDescriber } from './Modal'

import { Button, Flex, StackDivider, VStack } from '@chakra-ui/react'
import { BsInfoCircle, BsTelephoneXFill } from 'react-icons/bs'
import { RetryButton } from './RetryButton'

export function BusyCall({ canRetry, onRetry, onShare, target, theme }: PhoneCallModalProps): ModalDescriber {
  return {
    title: 'A linha estava ocupada',
    icon: BsTelephoneXFill,
    canDismiss: true,
    className: 'bonde-phone-call bonde-phone-call--busy',
    content: (
      <VStack divider={<StackDivider />}>
        <p>{`Não conseguimos completar a ligação porque o número de ${target.label} estava ocupado. Aguarde alguns minutos e tente de novo clicão no botão abaixo.`}</p>
        <Flex align="center" gap={2}>
          <BsInfoCircle />
          <p className="bonde-phone-call__has-link">
            {'Se continuar ocupado, uma boa alternativa é '}
            <Button type="button" variant="link" onClick={onShare}>
              compartilhar a campanha
            </Button>
            .
          </p>
        </Flex>
      </VStack>
    ),
    footer: (
      <RetryButton canRetry={canRetry} theme={theme} onRetry={onRetry} />
    ),
  }
}

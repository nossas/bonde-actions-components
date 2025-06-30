import type { PhoneCallModalProps } from '..'
import type { ModalDescriber } from './Modal'

import { Button, Flex, StackDivider, VStack } from '@chakra-ui/react'
import { BsInfoCircle, BsTelephoneXFill } from 'react-icons/bs'
import { RetryButton } from './RetryButton'

export function NoAnswerCall({ onRetry, onShare, target, theme }: PhoneCallModalProps): ModalDescriber {
  return {
    title: 'A pessoa responsável não atendeu',
    icon: BsTelephoneXFill,
    canDismiss: true,
    className: 'bonde-phone-call bonde-phone-call--no-answer',
    content: (
      <VStack divider={<StackDivider />}>
        <p>
          A chamada foi feita, mas não conseguimos contato com
          {target.label}
          . Aguarde alguns minutos e tente de novo clicando no botão abaixo.
        </p>
        <Flex align="center" gap={2}>
          <BsInfoCircle />
          <p className="bonde-phone-call__has-link">
            {'Se ninguém atender, uma boa alternativa é '}
            <Button type="button" variant="link" onClick={onShare}>
              compartilhar a campanha
            </Button>
            .
          </p>
        </Flex>
      </VStack>
    ),
    footer: (
      <RetryButton theme={theme} onRetry={onRetry} />
    ),
  }
}

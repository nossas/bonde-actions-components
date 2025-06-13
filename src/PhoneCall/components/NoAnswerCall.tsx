import type { PhoneCallModalProps } from '..'
import type { ModalDescriber } from './Modal'

import { Button, Flex, Icon } from '@chakra-ui/react'
import { BsInfoCircle, BsTelephoneXFill } from 'react-icons/bs'
import { RetryButton } from './RetryButton'

export function NoAnswerCall({ onRetry, target }: PhoneCallModalProps): ModalDescriber {
  return {
    title: 'A pessoa responsável não atendeu',
    icon: BsTelephoneXFill,
    canDismiss: true,
    className: 'bonde-phone-call bonde-phone-call--no-answer',
    content: (
      <>
        <p>
          A chamada foi feita, mas não conseguimos contato com
          {target.label}
          . Aguarde alguns minutos e tente de novo clicando no botão abaixo.
        </p>
        <Flex align="center" gap={2}>
          <Icon as={BsInfoCircle} />
          <p>
            {'Se ninguém atender, uma boa alternativa é '}
            <Button type="button" variant="link">
              compartilhar a campanha
            </Button>
            .
          </p>
        </Flex>
      </>
    ),
    footer: (
      <RetryButton onRetry={onRetry} />
    ),
  }
}

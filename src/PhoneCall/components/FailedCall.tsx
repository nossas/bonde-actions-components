import type { PhoneCallModalProps } from '..'
import type { ModalDescriber } from './Modal'

import { Button, Flex } from '@chakra-ui/react'
import { BsInfoCircle, BsTelephoneXFill } from 'react-icons/bs'
import { RetryButton } from './RetryButton'

export function FailedCall({ onRetry }: PhoneCallModalProps): ModalDescriber {
  return {
    title: 'Não foi possível completar a ligação',
    icon: BsTelephoneXFill,
    canDismiss: true,
    className: 'bonde-phone-call bonde-phone-call--failed',
    content: (
      <>
        <p>A ligação com o destino falhou — isso pode ter acontecido por um erro no número ou instabilidade na rede. Aguarde alguns minutos e tente de novo clicando no botão abaixo.</p>
        <Flex align="center">
          <BsInfoCircle />
          <p>
            {'Se continuar falhando, uma boa alternativa é '}
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

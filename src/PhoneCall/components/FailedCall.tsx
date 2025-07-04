import type { PhoneCallModalProps } from '..'

import { Dialog, Flex, StackSeparator, VStack } from '@chakra-ui/react'
import { BsInfoCircle, BsTelephoneXFill } from 'react-icons/bs'
import { LinkButton } from './LinkButton'
import { ModalCloseButton } from './ModalCloseButton'
import { ModalHeader } from './ModalHeader'

export function FailedCall({ brandColor, linkColor, onShare }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsTelephoneXFill} iconColor={brandColor} title="Não foi possível completar a ligação" />
      <ModalCloseButton />
      <Dialog.Body>
        <VStack separator={<StackSeparator />}>
          <p>A ligação com o destino falhou — isso pode ter acontecido por um erro no número ou instabilidade na rede. Aguarde alguns minutos e tente de novo clicando no botão abaixo.</p>
          <Flex align="center" gap={2}>
            <BsInfoCircle />
            <p>
              {'Se continuar falhando, uma boa alternativa é '}
              <LinkButton linkColor={linkColor} onClick={onShare}>
                compartilhar a campanha
              </LinkButton>
              .
            </p>
          </Flex>
        </VStack>
      </Dialog.Body>
    </>
  )
}

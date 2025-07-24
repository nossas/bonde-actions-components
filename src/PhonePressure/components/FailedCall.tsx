import type { PhoneCallModalProps } from '../PhoneCall'

import { Flex, ModalBody, ModalCloseButton, StackDivider, VStack } from '@chakra-ui/react'
import { BsInfoCircle, BsTelephoneXFill } from 'react-icons/bs'
import { Button } from '../../shared/components/Button'
import { ModalHeader } from './ModalHeader'

export function FailedCall({ brandColor, onShare }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsTelephoneXFill} iconColor={brandColor} title="Não foi possível completar a ligação" />
      <ModalCloseButton />
      <ModalBody>
        <VStack divider={<StackDivider />}>
          <p>A ligação com o destino falhou — isso pode ter acontecido por um erro no número ou instabilidade na rede. Aguarde alguns minutos e tente de novo clicando no botão abaixo.</p>
          <Flex align="center" gap={2}>
            <BsInfoCircle />
            <p>
              {'Se continuar falhando, uma boa alternativa é '}
              <Button isLink onClick={onShare}>
                compartilhar a campanha
              </Button>
              .
            </p>
          </Flex>
        </VStack>
      </ModalBody>
    </>
  )
}

import type { PhoneCallModalProps } from '..'

import { Button, Flex, ModalBody, ModalCloseButton, StackDivider, VStack } from '@chakra-ui/react'
import { BsInfoCircle, BsTelephoneXFill } from 'react-icons/bs'
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
            <p className="bonde-phone-call__has-link">
              {'Se continuar falhando, uma boa alternativa é '}
              <Button type="button" variant="link" onClick={onShare}>
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

import type { PhoneCallModalProps } from '../PhoneCall'

import { Button, Flex, ModalBody, ModalCloseButton, StackDivider, VStack } from '@chakra-ui/react'
import { BsInfoCircle, BsTelephoneXFill } from 'react-icons/bs'
import { ModalHeader } from './ModalHeader'

export function BusyCall({ brandColor, linkColor, target, onShare }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsTelephoneXFill} iconColor={brandColor} title="A linha estava ocupada" />
      <ModalCloseButton />
      <ModalBody>
        <VStack divider={<StackDivider />}>
          <p>{`Não conseguimos completar a ligação porque o número de ${target.name} estava ocupado. Aguarde alguns minutos e tente de novo clicão no botão abaixo.`}</p>
          <Flex align="center" gap={2}>
            <BsInfoCircle />
            <p>
              {'Se continuar ocupado, uma boa alternativa é '}
              <Button color={linkColor} type="button" variant="link" onClick={onShare}>
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

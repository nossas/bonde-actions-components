import type { PhoneCallModalProps } from '..'

import { Dialog, Flex, StackSeparator, VStack } from '@chakra-ui/react'
import { BsInfoCircle, BsTelephoneXFill } from 'react-icons/bs'
import { LinkButton } from './LinkButton'
import { ModalCloseButton } from './ModalCloseButton'
import { ModalHeader } from './ModalHeader'

export function BusyCall({ brandColor, linkColor, target, onShare }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsTelephoneXFill} iconColor={brandColor} title="A linha estava ocupada" />
      <ModalCloseButton />
      <Dialog.Body>
        <VStack separator={<StackSeparator />}>
          <p>{`Não conseguimos completar a ligação porque o número de ${target.label} estava ocupado. Aguarde alguns minutos e tente de novo clicão no botão abaixo.`}</p>
          <Flex align="center" gap={2}>
            <BsInfoCircle />
            <p>
              {'Se continuar ocupado, uma boa alternativa é '}
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

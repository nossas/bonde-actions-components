import type { PhoneCallModalProps } from '..'

import { Dialog, Flex, StackSeparator, VStack } from '@chakra-ui/react'
import { BsInfoCircle, BsTelephoneXFill } from 'react-icons/bs'
import { LinkButton } from './LinkButton'
import { ModalCloseButton } from './ModalCloseButton'
import { ModalHeader } from './ModalHeader'

export function NoAnswerCall({ brandColor, linkColor, target, onShare }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsTelephoneXFill} iconColor={brandColor} title="A pessoa responsável não atendeu" />
      <ModalCloseButton />
      <Dialog.Body>
        <VStack separator={<StackSeparator />}>
          <p>
            A chamada foi feita, mas não conseguimos contato com
            {target.label}
            . Aguarde alguns minutos e tente de novo clicando no botão abaixo.
          </p>
          <Flex align="center" gap={2}>
            <BsInfoCircle />
            <p>
              {'Se ninguém atender, uma boa alternativa é '}
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

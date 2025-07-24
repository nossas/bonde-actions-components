import type { PhoneCallModalProps } from '../PhoneCall'

import { Flex, ModalBody, ModalCloseButton, StackDivider, VStack } from '@chakra-ui/react'
import { BsInfoCircle, BsTelephoneXFill } from 'react-icons/bs'
import { Button } from '../../shared/components/Button'
import { ModalHeader } from './ModalHeader'

export function NoAnswerCall({ brandColor, target, onShare }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsTelephoneXFill} iconColor={brandColor} title="A pessoa responsável não atendeu" />
      <ModalCloseButton />
      <ModalBody>
        <VStack divider={<StackDivider />}>
          <p>
            A chamada foi feita, mas não conseguimos contato com
            {' '}
            {target.name}
            . Aguarde alguns minutos e tente de novo clicando no botão abaixo.
          </p>
          <Flex align="center" gap={2}>
            <BsInfoCircle />
            <p>
              {'Se ninguém atender, uma boa alternativa é '}
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

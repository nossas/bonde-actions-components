import type { PhoneCallModalProps } from '../PhoneCall'

import { Flex, ModalBody, ModalCloseButton, StackDivider, VStack } from '@chakra-ui/react'
import { BsInfoCircle, BsTelephoneXFill } from 'react-icons/bs'
import { Button } from '../../shared/components/Button'
import { ModalHeader } from './ModalHeader'

export function BusyCall({ brandColor, target, onShare }: Readonly<PhoneCallModalProps>): JSX.Element {
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

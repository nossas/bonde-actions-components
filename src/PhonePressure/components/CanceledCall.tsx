import type { PhoneCallModalProps } from '../PhoneCall'

import { Flex, ModalBody, ModalCloseButton, StackDivider, VStack } from '@chakra-ui/react'
import { BsPencilSquare, BsTelephoneXFill } from 'react-icons/bs'
import { Button } from '../../shared/components/Button'
import { ModalHeader } from './ModalHeader'

export function CanceledCall({ activist, brandColor, onDismiss }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsTelephoneXFill} iconColor={brandColor} title="A chamada não foi completada" />
      <ModalCloseButton />
      <ModalBody>
        <VStack divider={<StackDivider />}>
          <p>A ligação foi interrompida — isso pode ter acontecido por instabilidade na rede ou encerramento da chamada. Mas tudo bem, você pode tentar novamente.</p>
          <Flex align="center" gap={4} justify="start">
            <p>{`Número informado: +55 ${activist.phone}`}</p>
            <Button isLink onClick={onDismiss}>
              <BsPencilSquare />
              Alterar número
            </Button>
          </Flex>
          <p>Se estiver tudo certo, é só clicar no botão abaixo e ficar de olho no celular!</p>
        </VStack>
      </ModalBody>
    </>
  )
}

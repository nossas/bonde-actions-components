import type { PhoneCallModalProps } from '..'

import { Button, Dialog, Flex, StackSeparator, VStack } from '@chakra-ui/react'
import { BsPencilSquare, BsTelephoneXFill } from 'react-icons/bs'
import { ModalCloseButton } from './ModalCloseButton'
import { ModalHeader } from './ModalHeader'

export function CanceledCall({ brandColor, linkColor, userPhone, onDismiss }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsTelephoneXFill} iconColor={brandColor} title="A chamada não foi completada" />
      <ModalCloseButton />
      <Dialog.Body>
        <VStack separator={<StackSeparator />}>
          <p>A ligação foi interrompida — isso pode ter acontecido por instabilidade na rede ou encerramento da chamada. Mas tudo bem, você pode tentar novamente.</p>
          <Flex align="center" gap={4} justify="start">
            <p>{`Número informado: ${userPhone}`}</p>
            <Button color={linkColor} type="button" variant="ghost" onClick={onDismiss}>
              <BsPencilSquare />
              {' '}
              Alterar número
            </Button>
          </Flex>
          <p>Se estiver tudo certo, é só clicar no botão abaixo e ficar de olho no celular!</p>
        </VStack>
      </Dialog.Body>
    </>
  )
}

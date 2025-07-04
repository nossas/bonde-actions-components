import type { PhoneCallModalProps } from '..'

import { Button, Flex, ModalCloseButton, ModalBody, StackDivider, VStack } from '@chakra-ui/react'
import { BsPencilSquare, BsTelephoneXFill } from 'react-icons/bs'
import { ModalHeader } from './ModalHeader'

export function CanceledCall({ userPhoneNumber, theme, onDismiss }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsTelephoneXFill} title="A chamada não foi completada" theme={theme}/>
      <ModalCloseButton />
      <ModalBody>
        <VStack divider={<StackDivider />}>
          <p>A ligação foi interrompida — isso pode ter acontecido por instabilidade na rede ou encerramento da chamada. Mas tudo bem, você pode tentar novamente.</p>
          <Flex align="center" className="bonde-phone-call__has-link" gap={4} justify="start">
            <p>{`Número informado: ${userPhoneNumber}`}</p>
            <Button leftIcon={<BsPencilSquare />} type="button" variant="link" onClick={onDismiss}>
              Alterar número
            </Button>
          </Flex>
          <p>Se estiver tudo certo, é só clicar no botão abaixo e ficar de olho no celular!</p>
        </VStack>
      </ModalBody>
    </>
  )
}

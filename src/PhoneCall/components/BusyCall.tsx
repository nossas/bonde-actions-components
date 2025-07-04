import type { PhoneCallModalProps } from '..'

import { Button, Flex, ModalCloseButton, ModalBody, StackDivider, VStack } from '@chakra-ui/react'
import { BsInfoCircle, BsTelephoneXFill } from 'react-icons/bs'
import { ModalHeader } from './ModalHeader'

export function BusyCall({ target, theme, onShare }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsTelephoneXFill} title="A linha estava ocupada" theme={theme}/>
      <ModalCloseButton />
      <ModalBody>
        <VStack divider={<StackDivider />}>
          <p>{`Não conseguimos completar a ligação porque o número de ${target.label} estava ocupado. Aguarde alguns minutos e tente de novo clicão no botão abaixo.`}</p>
          <Flex align="center" gap={2}>
            <BsInfoCircle />
            <p className="bonde-phone-call__has-link">
              {'Se continuar ocupado, uma boa alternativa é '}
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

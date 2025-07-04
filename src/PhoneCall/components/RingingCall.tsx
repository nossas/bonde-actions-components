import type { PhoneCallModalProps } from '..'

import { ModalBody, VStack } from '@chakra-ui/react'
import { BsArrowRight } from 'react-icons/bs'
import { ModalHeader } from './ModalHeader'

export function RingingCall({ target, theme }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsArrowRight} title="Chamando a pessoa responsável" theme={theme} />
      <ModalBody>
        <VStack>
          <p>{`Você atendeu a nossa ligação! Agora estamos tentando falar com ${target.label}.`}</p>
          <p><strong>Aguarde na linha. Vamos conectar assim que o alvo atender.</strong></p>
        </VStack>
      </ModalBody>
    </>
  )
}

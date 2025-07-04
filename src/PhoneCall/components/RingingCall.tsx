import type { PhoneCallModalProps } from '..'

import { Dialog, VStack } from '@chakra-ui/react'
import { BsArrowRight } from 'react-icons/bs'
import { ModalHeader } from './ModalHeader'

export function RingingCall({ brandColor, target }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsArrowRight} iconColor={brandColor} title="Chamando a pessoa responsável" />
      <Dialog.Body>
        <VStack>
          <p>{`Você atendeu a nossa ligação! Agora estamos tentando falar com ${target.label}.`}</p>
          <p><strong>Aguarde na linha. Vamos conectar assim que o alvo atender.</strong></p>
        </VStack>
      </Dialog.Body>
    </>
  )
}

import type { PhoneCallModalProps } from '..'

import { ModalBody, VStack } from '@chakra-ui/react'
import { BsPeopleFill } from 'react-icons/bs'
import { ModalHeader } from './ModalHeader'

export function InProgressCall({ brandColor, guideline, target }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsPeopleFill} iconColor={brandColor} title={`Você está em chamada com ${target.name}`} />
      <ModalBody>
        <VStack>
          <p>Agora é com você! Se quiser, pode usar este exemplo durante a conversa:</p>
          <blockquote>{guideline}</blockquote>
          <p>Finalize agradecendo e encerre a chamada.</p>
        </VStack>
      </ModalBody>
    </>
  )
}

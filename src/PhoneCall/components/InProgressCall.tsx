import type { PhoneCallModalProps } from '..'

import { ModalBody, VStack } from '@chakra-ui/react'
import { BsPeopleFill } from 'react-icons/bs'
import { ModalHeader } from './ModalHeader'

export function InProgressCall({ script, target, theme }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsPeopleFill} title={`Você está em chamada com ${target.label}`} theme={theme}/>
      <ModalBody>
        <VStack>
          <p>Agora é com você! Se quiser, pode usar este exemplo durante a conversa:</p>
          <blockquote>{script}</blockquote>
          <p>Finalize agradecendo e encerre a chamada.</p>
        </VStack>
      </ModalBody>
    </>
  )
}

import type { PhoneCallModalProps } from '..'

import { ModalCloseButton, ModalBody, VStack } from '@chakra-ui/react'
import { BsMegaphoneFill } from 'react-icons/bs'
import { ModalHeader } from './ModalHeader'

export function ShareCampaign({ postActions, theme }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsMegaphoneFill} title="Ajude a fortalecer a campanha" theme={theme}/>
      <ModalCloseButton />
      <ModalBody>
        <VStack>
          <p>Se a ligação não funcionou, você pode ampliar o impacto compartilhando a campanha com outras pessoas:</p>
          {postActions}
        </VStack>
      </ModalBody>
    </>
  )
}

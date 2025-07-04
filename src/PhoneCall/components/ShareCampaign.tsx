import type { PhoneCallModalProps } from '..'

import { Dialog, VStack } from '@chakra-ui/react'
import { BsMegaphoneFill } from 'react-icons/bs'
import { ModalCloseButton } from './ModalCloseButton'
import { ModalHeader } from './ModalHeader'

export function ShareCampaign({ brandColor, postActions }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsMegaphoneFill} iconColor={brandColor} title="Ajude a fortalecer a campanha" />
      <ModalCloseButton />
      <Dialog.Body>
        <VStack>
          <p>Se a ligação não funcionou, você pode ampliar o impacto compartilhando a campanha com outras pessoas:</p>
          {postActions}
        </VStack>
      </Dialog.Body>
    </>
  )
}

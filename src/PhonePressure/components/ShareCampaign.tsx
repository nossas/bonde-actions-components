import type { PhoneCallModalProps } from '../PhoneCall'

import { ModalBody, ModalCloseButton, VStack } from '@chakra-ui/react'
import { BsMegaphoneFill } from 'react-icons/bs'
import { ModalHeader } from './ModalHeader'

export function ShareCampaign({ brandColor, postActionHtml }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsMegaphoneFill} iconColor={brandColor} title="Ajude a fortalecer a campanha" />
      <ModalCloseButton />
      <ModalBody>
        <VStack>
          <p>Se a ligação não funcionou, você pode ampliar o impacto compartilhando a campanha com outras pessoas:</p>
          <div className="bonde-phone-call__post-action" dangerouslySetInnerHTML={{ __html: postActionHtml }} />
        </VStack>
      </ModalBody>
    </>
  )
}

import type { PhoneCallModalProps } from '..'
import type { ModalDescriber } from './Modal'

import { VStack } from '@chakra-ui/react'
import { BsMegaphoneFill } from 'react-icons/bs'

export function ShareCampaign({ postActions }: PhoneCallModalProps): ModalDescriber {
  return {
    title: 'Ajude a fortalecer a campanha',
    icon: BsMegaphoneFill,
    canDismiss: true,
    className: 'bonde-phone-call bonde-phone-call--share',
    content: (
      <VStack>
        <p>Se a ligação não funcionou, você pode ampliar o impacto compartilhando a campanha com outras pessoas:</p>
        {postActions}
      </VStack>
    ),
  }
}

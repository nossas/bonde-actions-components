import type { PhoneCallModalProps } from '..'
import type { ModalDescriber } from './Modal'

import { BsPeopleFill } from 'react-icons/bs'

export function InProgressCall({ script, target }: PhoneCallModalProps): ModalDescriber {
  return {
    title: `Você está em chamada com ${target.label}`,
    icon: BsPeopleFill,
    canDismiss: false,
    className: 'bonde-phone-call bonde-phone-call--in-progress',
    content: (
      <>
        <p>Agora é com você! Se quiser, pode usar este exemplo durante a conversa:</p>
        <blockquote>{script}</blockquote>
        <p>Finalize agradecendo e encerre a chamada.</p>
      </>
    ),
  }
}

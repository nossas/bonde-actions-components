import type { PhoneCallModalProps } from '../PhoneCall'

import { BsPeopleFill } from 'react-icons/bs'
import { ModalBody } from './ModalBody'
import { ModalHeader } from './ModalHeader'

export function InProgressCall({ brandColor, guideline, target }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsPeopleFill} iconColor={brandColor} title={`Você está em chamada com ${target.name}`} />
      <ModalBody>
        <div className="bonde-phone-action__stack">
          <p>Agora é com você! Se quiser, pode usar este exemplo durante a conversa:</p>
          <blockquote className="bonde-phone-action__quote" dangerouslySetInnerHTML={{ __html: guideline }}/>
          <p>Finalize agradecendo e encerre a chamada.</p>
        </div>
      </ModalBody>
    </>
  )
}

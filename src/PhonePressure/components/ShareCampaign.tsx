import type { PhoneCallModalProps } from '../PhoneCall'

import { BsMegaphoneFill } from 'react-icons/bs'
import { ModalBody } from './ModalBody'
import { ModalHeader } from './ModalHeader'
import { PostAction } from './PostAction'

export function ShareCampaign({ brandColor, postActionHtml }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsMegaphoneFill} iconColor={brandColor} title="Ajude a fortalecer a campanha" />
      <ModalBody>
        <div className="bonde-phone-action__stack">
          <p>Se a ligação não funcionou, você pode ampliar o impacto compartilhando a campanha com outras pessoas:</p>
          <PostAction html={postActionHtml} />
        </div>
      </ModalBody>
    </>
  )
}

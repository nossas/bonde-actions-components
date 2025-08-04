import type { PhoneCallModalProps } from '../PhoneCall'

import { BsCheckLg } from 'react-icons/bs'
import { ModalBody } from './ModalBody'
import { ModalHeader } from './ModalHeader'
import { PostAction } from './PostAction'

export function CompletedCall({ brandColor, postActionHtml }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsCheckLg} iconColor={brandColor} title="Ligação realizada com sucesso!" />
      <ModalBody>
        <div className="bonde-phone-action__stack bonde-phone-action__stack--segmented">
          <p>Obrigada por participar! Essa ligação ajuda a pressionar por uma resposta e mostrar que esse tema importa.</p>
          <div className="bonde-phone-action__stack">
            <p>Compartilhe a campanha com mais pessoas para aumentar o impacto:</p>
            <PostAction html={postActionHtml} />
          </div>
        </div>
      </ModalBody>
    </>
  )
}

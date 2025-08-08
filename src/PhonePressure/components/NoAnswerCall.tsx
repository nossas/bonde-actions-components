import type { PhoneCallModalProps } from '../PhoneCall'

import { BsInfoCircle, BsTelephoneXFill } from 'react-icons/bs'
import { ModalBody } from './ModalBody'
import { ModalHeader } from './ModalHeader'

export function NoAnswerCall({ brandColor, target, onShare }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsTelephoneXFill} iconColor={brandColor} title="A pessoa responsável não atendeu" />
      <ModalBody>
        <div className="bonde-phone-action__stack bonde-phone-action__stack--segmented">
          <p>
            A chamada foi feita, mas não conseguimos contato com
            {' '}
            {target.name}
            . Aguarde alguns minutos e tente de novo clicando no botão abaixo.
          </p>
          <div className="bonde-phone-action__call-to-share">
          <div className="bonde-phone-action__divider" />
            <p>
              <BsInfoCircle />
              {' Se continuar ocupado, uma boa alternativa é '}
              <a href="#" onClick={onShare}>
                compartilhar a campanha
              </a>
              .
            </p>
          </div>
        </div>
      </ModalBody>
    </>
  )
}

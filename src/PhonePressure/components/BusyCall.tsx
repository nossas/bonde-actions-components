import type { PhoneCallModalProps } from '../PhoneCall'

import { BsInfoCircle, BsTelephoneXFill } from 'react-icons/bs'
import { ModalBody } from './ModalBody'
import { ModalHeader } from './ModalHeader'

export function BusyCall({ brandColor, target, onShare }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsTelephoneXFill} iconColor={brandColor} title="A linha estava ocupada" />
      <ModalBody>
        <div className="bonde-phone-action__stack bonde-phone-action__stack--segmented">
          <p>{`Não conseguimos completar a ligação porque o número de ${target.name} estava ocupado. Aguarde alguns minutos e tente de novo clicão no botão abaixo.`}</p>
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

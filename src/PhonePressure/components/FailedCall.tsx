import type { PhoneCallModalProps } from '../PhoneCall'

import { BsInfoCircle, BsTelephoneXFill } from 'react-icons/bs'
import { Button } from '../../shared/components/Button'
import { ModalBody } from './ModalBody'
import { ModalHeader } from './ModalHeader'

export function FailedCall({ brandColor, onShare }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsTelephoneXFill} iconColor={brandColor} title="Não foi possível completar a ligação" />
      <ModalBody>
        <div className="bonde-phone-action__stack bonde-phone-action__stack--segmented">
          <p>A ligação com o destino falhou — isso pode ter acontecido por um erro no número ou instabilidade na rede. Aguarde alguns minutos e tente de novo clicando no botão abaixo.</p>
          <div className="bonde-phone-action__call-to-share">
          <div className="bonde-phone-action__divider" />
            <p>
            <BsInfoCircle />
              {' Se continuar ocupado, uma boa alternativa é '}
              <Button isLink onClick={onShare}>
                compartilhar a campanha
              </Button>
              .
            </p>
          </div>
        </div>
      </ModalBody>
    </>
  )
}

import type { PhoneCallModalProps } from '../PhoneCall'

import { BsInfoCircle, BsTelephoneXFill } from 'react-icons/bs'
import { Button } from '../../shared/components/Button'
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
            <BsInfoCircle />
            <div className="bonde-phone-action__divider" />
            <p>
              {'Se continuar ocupado, uma boa alternativa é '}
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

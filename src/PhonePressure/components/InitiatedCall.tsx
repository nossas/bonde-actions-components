import type { PhoneCallModalProps } from '../PhoneCall'

import { BsTelephoneFill } from 'react-icons/bs'
import { ModalBody } from './ModalBody'
import { ModalHeader } from './ModalHeader'

export function InitiatedCall({ brandColor }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsTelephoneFill} iconColor={brandColor} title="Estamos te ligando agora!" />
      <ModalBody>
        <div className="bonde-phone-action__stack bonde-phone-action__stack--segmented">
          <div className="bonde-phone-action__stack">
            <p>
              {'Você vai receber uma ligação do nosso número. '}
              <strong>Atenda o telefone para continuar.</strong>
            </p>
            <p>Assim que a chamada for atendida, vamos conectar com a pessoa responsável.</p>
          </div>
          
          <div className="bonde-phone-action__divider" />

          <p>
            {'O número pode começar com 001. '}
            <strong>Fique com o telefone por perto.</strong>
          </p>
        </div>
      </ModalBody>
    </>
  )
}

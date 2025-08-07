import type { PhoneCallModalProps } from '../PhoneCall'

import { BsPencilSquare, BsTelephoneXFill } from 'react-icons/bs'
import { Button } from '../../shared/components/Button'
import { ModalBody } from './ModalBody'
import { ModalHeader } from './ModalHeader'

export function CanceledCall({ activist, brandColor, onDismiss }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsTelephoneXFill} iconColor={brandColor} title="A chamada não foi completada" />
      <ModalBody>
        <div className="bonde-phone-action__stack bonde-phone-action__stack--segmented">
          <p>A ligação foi interrompida — isso pode ter acontecido por instabilidade na rede ou encerramento da chamada. Mas tudo bem, você pode tentar novamente.</p>
          <div className="bonde-phone-action__check-number">
            <div className="bonde-phone-action__divider" />
            <p>{`Número informado: +55 ${activist.phone}`}</p>
            <Button isLink onClick={onDismiss}>
              <BsPencilSquare />
              Alterar número
            </Button>
          </div>
          <div className="bonde-phone-action__divider" />
          <p>Se estiver tudo certo, é só clicar no botão abaixo e ficar de olho no celular!</p>
        </div>
      </ModalBody>
    </>
  )
}

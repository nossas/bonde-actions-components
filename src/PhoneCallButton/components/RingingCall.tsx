import type { PhoneTarget } from '..'

import { BsArrowRight as RingingIcon } from 'react-icons/bs'

import { Modal, ModalBody } from './Modal'

interface RingingCallProps {
  target: PhoneTarget
}

export function RingingCall({ target }: Readonly<RingingCallProps>): JSX.Element {
  return (
    <Modal
      canDismiss={false}
      className="bonde-phone-call bonde-phone-call--ringing"
      icon={RingingIcon}
      title="Chamando a pessoa responsável"
    >
      <ModalBody>
        <p>
          Você atendeu a nossa ligação! Agora estamos tentando falar com
          {target.label}
        </p>
        <p><strong>Aguarde na linha. Vamos conectar assim que o alvo atender.</strong></p>
      </ModalBody>
    </Modal>
  )
}

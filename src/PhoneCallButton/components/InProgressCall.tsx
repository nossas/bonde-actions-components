import type { PhoneTarget } from '..'

import { BsPeopleFill as InProgressIcon } from 'react-icons/bs'

import { Modal, ModalBody } from './Modal'

interface InProgressCallProps {
  script: string
  target: PhoneTarget
}

export function InProgressCall({ script, target }: Readonly<InProgressCallProps>): JSX.Element {
  return (
    <Modal
      canDismiss={false}
      className="bonde-phone-call bonde-phone-call--in-progress"
      icon={InProgressIcon}
      title={`Você está em chamada com ${target.label}`}
    >
      <ModalBody>
        <p>Agora é com você! Se quiser, pode usar este exemplo durante a conversa:</p>
        <blockquote>{script}</blockquote>
        <p>Finalize agradecendo e encerre a chamada.</p>
      </ModalBody>
    </Modal>
  )
}

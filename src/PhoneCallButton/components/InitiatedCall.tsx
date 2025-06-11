import { BsTelephoneFill as InitiatedIcon } from 'react-icons/bs'

import { Modal, ModalBody, ModalFooter } from './Modal'

export function InitiatedCall(): JSX.Element {
  return (
    <Modal
      canDismiss={false}
      className="bonde-phone-call bonde-phone-call--initiated"
      icon={InitiatedIcon}
      title="Estamos te ligando agora!"
    >
      <ModalBody>
        <p>
          Você vai receber uma ligação do nosso número.
          {' '}
          <strong>Atenda o telefone para continuar.</strong>
        </p>
        <p>Assim que a chamada for atendida, vamos conectar com a pessoa responsável.</p>
      </ModalBody>
      <ModalFooter>
        <p>
          O número pode começar com [XX].
          {' '}
          <strong>Fique com o telefone por perto.</strong>
        </p>
      </ModalFooter>
    </Modal>
  )
}

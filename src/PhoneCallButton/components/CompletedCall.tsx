import { BsCheckLg as CompletedIcon } from 'react-icons/bs'

import { Modal, ModalBody } from './Modal'

interface CompletedCallProps {
  children?: JSX.Element | JSX.Element[]
}

export function CompletedCall({ children }: Readonly<CompletedCallProps>): JSX.Element {
  return (
    <Modal
      canDismiss={false}
      className="bonde-phone-call bonde-phone-call--completed"
      icon={CompletedIcon}
      title="Ligação realizada com sucesso!"
    >
      <ModalBody>
        <p>Obrigada por participar! Essa ligação ajuda a pressionar por uma resposta e mostrar que esse tema importa.</p>
        {children && (
          <>
            <p>Compartilhe a campanha com mais pessoas para aumentar o impacto:</p>
            {children}
          </>
        )}
      </ModalBody>
    </Modal>
  )
}

import { BsXLg } from 'react-icons/bs'

import { Button } from '../../shared/components/Button'

export interface ModalCloseButtonProps {
  onClick?: () => void
}

export function ModalCloseButton({ onClick }: Readonly<ModalCloseButtonProps>): JSX.Element {
  return (
    <Button className="bonde-action-modal__close" aria-label="Fechar" onClick={onClick}>
      <BsXLg />
    </Button>
  )
}

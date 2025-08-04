import type { IconType } from 'react-icons'

import { useContext } from 'react'
import { BsXLg } from 'react-icons/bs'
import { ModalContext } from './ModalContext'

export interface ModalHeaderProps {
  icon: IconType
  iconColor: string
  title: string
}

export function ModalHeader({ icon: Icon, iconColor, title }: Readonly<ModalHeaderProps>): JSX.Element {
  const { canDismiss, onDismiss } = useContext(ModalContext)

  return (
    <header className="bonde-action-modal__header">
      <Icon color={iconColor} aria-hidden="true" />
      <span>{title}</span>
      {canDismiss && (
        <button type="button" className="bonde-action-modal__close" aria-label="Encerrar chamada" onClick={onDismiss}>
          <BsXLg />
        </button>
      )}
    </header>
  )
}

import type { IconType } from 'react-icons'

export interface ModalHeaderProps {
  icon: IconType
  iconColor: string
  title: string
}

export function ModalHeader({ icon: Icon, iconColor, title }: Readonly<ModalHeaderProps>): JSX.Element {
  return (
    <header className="bonde-action-modal__header">
      <Icon color={iconColor} aria-hidden="true" />
      <span>{title}</span>
    </header>
  )
}

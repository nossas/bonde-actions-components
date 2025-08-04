import type { ReactNode } from 'react'

export interface ModalFooterProps {
  children: ReactNode
}

export function ModalFooter({ children }: Readonly<ModalFooterProps>): JSX.Element {
  return (
    <footer className="bonde-action-modal__footer">
      {children}
    </footer>
  )
}

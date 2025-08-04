import type { ReactNode } from 'react'

export interface ModalBodyProps {
  children: ReactNode
}

export function ModalBody({ children }: Readonly<ModalBodyProps>): JSX.Element {
  return (
    <main className="bonde-action-modal__body">
      {children}
    </main>
  )
}

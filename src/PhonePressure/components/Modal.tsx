import type { CSSProperties, ReactNode } from 'react'

import { useMemo } from 'react'
import ReactModal from 'react-modal'
import { EMPTY_STYLE, NOOP } from '../../shared/constants'
import { ModalContext } from './ModalContext'

export interface ModalProps {
  canDismiss: boolean
  children: ReactNode
  className: string
  isOpen?: boolean
  onDismiss?: () => void
  style?: CSSProperties
}

export function Modal({ canDismiss, children, className, isOpen = true, onDismiss = NOOP, style = EMPTY_STYLE }: Readonly<ModalProps>): JSX.Element {
  const modalContext = useMemo(() => ({ canDismiss, onDismiss }), [canDismiss, onDismiss])

  return (
    <ReactModal
      className="bonde-action-modal__content"
      isOpen={isOpen}
      onAfterClose={onDismiss}
      shouldCloseOnEsc={canDismiss}
      overlayClassName="bonde-action-modal__overlay"
      shouldCloseOnOverlayClick={false}
    >
      <ModalContext.Provider value={modalContext}>
        <div className={className} style={style}>
          {children}
        </div>
      </ModalContext.Provider>
    </ReactModal>
  )
}

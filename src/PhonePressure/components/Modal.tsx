import type { CSSProperties, ReactNode } from 'react'
import type { Styles } from 'react-modal'

import clsx from 'clsx'
import { useMemo } from 'react'
import ReactModal from 'react-modal'
import { EMPTY_STYLE, NOOP } from '../../shared/constants'
import { ModalContext } from './ModalContext'

export interface ModalProps {
  appElement?: HTMLElement
  canDismiss: boolean
  children: ReactNode
  className: string
  isOpen?: boolean
  onDismiss?: () => void
  style?: CSSProperties
}

export function Modal({ appElement, canDismiss, children, className, isOpen = true, onDismiss = NOOP, style = EMPTY_STYLE }: Readonly<ModalProps>): JSX.Element {
  const modalContext = useMemo(() => ({ canDismiss, onDismiss }), [canDismiss, onDismiss])
  const styles = useMemo<Styles>(() => ({ content: style }), [style])

  return (
    <ReactModal
      appElement={appElement}
      ariaHideApp={!!appElement}
      className={clsx('bonde-action-modal__content', className)}
      isOpen={isOpen}
      onAfterClose={onDismiss}
      shouldCloseOnEsc={canDismiss}
      overlayClassName="bonde-action-modal__overlay"
      shouldCloseOnOverlayClick={false}
      style={styles}
    >
      <ModalContext.Provider value={modalContext}>
        {children}
      </ModalContext.Provider>
    </ReactModal>
  )
}

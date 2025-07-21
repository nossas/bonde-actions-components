import type { ReactNode } from 'react'

import { Modal as ChakraModal, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { NOOP } from '../../shared/functions'

export { ModalBody, ModalFooter } from '@chakra-ui/react'

export interface ModalProps {
  canDismiss: boolean
  children: ReactNode
  className: string
  isOpen?: boolean
  onDismiss?: () => void
}

export function Modal({ canDismiss, children, className, isOpen = true, onDismiss = NOOP }: Readonly<ModalProps>): JSX.Element {
  return (
    <ChakraModal size="2xl" isCentered closeOnEsc={canDismiss} closeOnOverlayClick={false} isOpen={isOpen} onClose={onDismiss}>
      <ModalOverlay />
      <ModalContent className={className}>
        {children}
      </ModalContent>
    </ChakraModal>
  )
}

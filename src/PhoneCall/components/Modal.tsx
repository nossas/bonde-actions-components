import type { BondeTheme } from '../../shared/theme'

import { Modal as ChakraModal, ModalContent, ModalOverlay } from '@chakra-ui/react'

export { ModalBody, ModalFooter } from '@chakra-ui/react'

function NOOP(): void { }

export interface ModalProps {
  canDismiss: boolean
  children: React.ReactNode
  className: string
  isOpen?: boolean
  theme: BondeTheme
  onDismiss?: () => void
}

export function Modal({ className, canDismiss, children, isOpen = true, onDismiss = NOOP }: Readonly<ModalProps>): JSX.Element {
  return (
    <ChakraModal size="2xl" isCentered closeOnEsc={canDismiss} closeOnOverlayClick={false} isOpen={isOpen} onClose={onDismiss}>
      <ModalOverlay />
      <ModalContent className={className}>
        {children}
      </ModalContent>
    </ChakraModal>
  )
}

import type { IconType } from 'react-icons'

import { Icon as ChakraIcon, Modal as ChakraModal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'

export { ModalBody, ModalFooter } from '@chakra-ui/react'

function NOOP(): void { }

export interface ModalProps {
  canDismiss?: boolean
  children: JSX.Element | JSX.Element[]
  className?: string
  icon: IconType
  isOpen?: boolean
  title: string
  onDismiss?: () => void
}

export function Modal({ canDismiss = true, children, className, icon: Icon, isOpen = true, title, onDismiss = NOOP }: Readonly<ModalProps>): JSX.Element {
  return (
    <ChakraModal size="2xl" isOpen={isOpen} onClose={onDismiss}>
      <ModalOverlay />
      <ModalContent className={className}>
        <ModalHeader>
          <div className="nossas-action-modal-header">
            <ChakraIcon>
              <Icon />
            </ChakraIcon>
            <span>{title}</span>
          </div>
        </ModalHeader>
        {canDismiss && <ModalCloseButton />}
        {children}
      </ModalContent>
    </ChakraModal>
  )
}

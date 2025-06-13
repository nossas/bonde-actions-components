import type { IconType } from 'react-icons'

import { Icon as ChakraIcon, Modal as ChakraModal, Flex, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'

export { ModalBody, ModalFooter } from '@chakra-ui/react'

function NOOP(): void { }

export interface ModalDescriber {
  canDismiss: boolean
  className: string
  content: JSX.Element | JSX.Element[]
  footer?: JSX.Element | JSX.Element[]
  icon: IconType
  title: string
}

export interface ModalProps extends ModalDescriber {
  isOpen?: boolean
  onDismiss?: () => void
}

export function Modal({ canDismiss = true, className, content, footer, icon, isOpen = true, title, onDismiss = NOOP }: Readonly<ModalProps>): JSX.Element {
  return (
    <ChakraModal size="2xl" isOpen={isOpen} onClose={onDismiss}>
      <ModalOverlay />
      <ModalContent className={className}>
        <ModalHeader>
          <Flex align="center" gap={2}>
            <ChakraIcon as={icon} boxSize={6} color="red.700" />
            <span>{title}</span>
          </Flex>
        </ModalHeader>
        {canDismiss && <ModalCloseButton />}
        <ModalBody>{content}</ModalBody>
        <ModalFooter>{footer ?? null}</ModalFooter>
      </ModalContent>
    </ChakraModal>
  )
}

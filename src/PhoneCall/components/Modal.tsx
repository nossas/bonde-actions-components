import type { IconType } from 'react-icons'
import type { BondeTheme } from '../../shared/theme'

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
  theme: BondeTheme
  onDismiss?: () => void
}

export function Modal({ canDismiss = true, className, content, footer, icon, isOpen = true, theme, title, onDismiss = NOOP }: Readonly<ModalProps>): JSX.Element {
  return (
    <ChakraModal size="2xl" isCentered closeOnEsc={canDismiss} closeOnOverlayClick={false} isOpen={isOpen} onClose={onDismiss}>
      <ModalOverlay />
      <ModalContent className={className}>
        <ModalHeader>
          <Flex align="center" gap={2}>
            <ChakraIcon as={icon} boxSize={6} color={theme.brand.main} />
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

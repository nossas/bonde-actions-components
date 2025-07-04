import type { DialogOpenChangeDetails } from '@chakra-ui/react'
import type { ReactNode } from 'react'

import { Dialog } from '@chakra-ui/react'
import { useCallback } from 'react'

function NOOP(): void { }

export interface ModalProps {
  canDismiss: boolean
  children: ReactNode
  className: string
  isOpen?: boolean
  onDismiss?: () => void
}

export function Modal({ canDismiss, children, className, isOpen = true, onDismiss = NOOP }: Readonly<ModalProps>): JSX.Element {
  const onOpenChange = useCallback(({ open }: DialogOpenChangeDetails) => {
    if (!open) {
      onDismiss()
    }
  }, [onDismiss])

  return (
    <Dialog.Root size="lg" closeOnEscape={canDismiss} closeOnInteractOutside={false} open={isOpen} placement="center" onOpenChange={onOpenChange}>
      <Dialog.Trigger />
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content className={className}>
          {children}
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  )
}

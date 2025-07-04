import { CloseButton, Dialog } from '@chakra-ui/react'

export function ModalCloseButton(): JSX.Element {
  return (
    <Dialog.CloseTrigger asChild>
      <CloseButton size="md" />
    </Dialog.CloseTrigger>
  )
}

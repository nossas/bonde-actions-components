import type { PhoneCallModalProps } from '..'

import { Dialog, StackSeparator, VStack } from '@chakra-ui/react'
import { BsCheckLg } from 'react-icons/bs'
import { ModalCloseButton } from './ModalCloseButton'
import { ModalHeader } from './ModalHeader'

export function CompletedCall({ brandColor, postActions }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsCheckLg} iconColor={brandColor} title="Ligação realizada com sucesso!" />
      <ModalCloseButton />
      <Dialog.Body>
        <VStack separator={<StackSeparator />}>
          <p>Obrigada por participar! Essa ligação ajuda a pressionar por uma resposta e mostrar que esse tema importa.</p>
          {postActions && (
            <VStack>
              <p>Compartilhe a campanha com mais pessoas para aumentar o impacto:</p>
              {postActions}
            </VStack>
          )}
        </VStack>
      </Dialog.Body>
    </>
  )
}

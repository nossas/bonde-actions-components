import type { PhoneCallModalProps } from '..'

import { ModalBody, ModalCloseButton, StackDivider, VStack } from '@chakra-ui/react'
import { BsCheckLg } from 'react-icons/bs'
import { ModalHeader } from './ModalHeader'

export function CompletedCall({ postActions, theme }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsCheckLg} title="Ligação realizada com sucesso!" theme={theme} />
      <ModalCloseButton />
      <ModalBody>
        <VStack divider={<StackDivider />}>
          <p>Obrigada por participar! Essa ligação ajuda a pressionar por uma resposta e mostrar que esse tema importa.</p>
          {postActions && (
            <VStack>
              <p>Compartilhe a campanha com mais pessoas para aumentar o impacto:</p>
              {postActions}
            </VStack>
          )}
        </VStack>
      </ModalBody>
    </>
  )
}

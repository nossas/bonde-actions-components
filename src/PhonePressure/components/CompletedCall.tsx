import type { PhoneCallModalProps } from '../PhoneCall'

import { ModalBody, ModalCloseButton, StackDivider, VStack } from '@chakra-ui/react'
import { BsCheckLg } from 'react-icons/bs'
import { ModalHeader } from './ModalHeader'
import { PostAction } from './PostAction'

export function CompletedCall({ brandColor, postActionHtml }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsCheckLg} iconColor={brandColor} title="Ligação realizada com sucesso!" />
      <ModalCloseButton />
      <ModalBody>
        <VStack divider={<StackDivider />}>
          <p>Obrigada por participar! Essa ligação ajuda a pressionar por uma resposta e mostrar que esse tema importa.</p>
          <VStack>
            <p>Compartilhe a campanha com mais pessoas para aumentar o impacto:</p>
            <PostAction html={postActionHtml} />
          </VStack>
        </VStack>
      </ModalBody>
    </>
  )
}

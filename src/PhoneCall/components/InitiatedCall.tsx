import type { PhoneCallModalProps } from '..'

import { ModalBody, StackDivider, VStack } from '@chakra-ui/react'
import { BsTelephoneFill } from 'react-icons/bs'
import { ModalHeader } from './ModalHeader'

export function InitiatedCall({ theme }: Readonly<PhoneCallModalProps>): JSX.Element {
  return (
    <>
      <ModalHeader icon={BsTelephoneFill} title="Estamos te ligando agora!" theme={theme} />
      <ModalBody>
        <VStack divider={<StackDivider />}>
          <VStack>
            <p>
              {'Você vai receber uma ligação do nosso número. '}
              <strong>Atenda o telefone para continuar.</strong>
            </p>
            <p>Assim que a chamada for atendida, vamos conectar com a pessoa responsável.</p>
          </VStack>
          <p>
            {'O número pode começar com [XX]. '}
            <strong>Fique com o telefone por perto.</strong>
          </p>
        </VStack>
      </ModalBody>
    </>
  )
}

import type { PhoneCallModalProps } from '..'
import type { ModalDescriber } from './Modal'

import { FaCheck } from 'react-icons/fa'

export function CompletedCall({ postActions }: PhoneCallModalProps): ModalDescriber {
  return {
    title: 'Ligação realizada com sucesso!',
    icon: FaCheck,
    canDismiss: true,
    className: 'bonde-phone-call bonde-phone-call--completed',
    content: (
      <>
        <p>Obrigada por participar! Essa ligação ajuda a pressionar por uma resposta e mostrar que esse tema importa.</p>
        {postActions && (
          <>
            <p>Compartilhe a campanha com mais pessoas para aumentar o impacto:</p>
            {postActions}
          </>
        )}
      </>
    ),
  }
}

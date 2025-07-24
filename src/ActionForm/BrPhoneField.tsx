import type { FieldError, UseFormRegister } from 'react-hook-form'
import type { ActivistInput } from '../shared/types'

import { useHookFormMask } from 'use-mask-input'
import { TextField as BaseTextField } from '../shared/components/TextField'

export interface BrPhoneFieldProps {
  errors: FieldError | undefined
  label: string
  name: keyof ActivistInput
  register: UseFormRegister<ActivistInput>
}

export function BrPhoneField({ errors, label, name, register }: Readonly<BrPhoneFieldProps>): JSX.Element {
  const registerWithMask = useHookFormMask(register)
  const fields = registerWithMask(name, ['99 9999-9999', '99 99999-9999'], {
    required: {
      value: true,
      message: 'Campo obrigatório',
    },
    pattern: {
      value: /\d{2} \d{4,5}-\d{4}/,
      message: 'Telefone inválido',
    },
  })

  return (
    <BaseTextField
      autoComplete="tel-national"
      errors={errors}
      label={label}
      pattern="[0-9]{2} [0-9]{4,5}-[0-9]{4}"
      type="tel"
      {...fields}
    />
  )
}

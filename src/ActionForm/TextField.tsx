import type { FieldError, UseFormRegister } from 'react-hook-form'
import type { ActivistInput } from '../shared/types'

import { TextField as BaseTextField } from '../shared/components/TextField'

export interface TextFieldProps {
  autocomplete?: AutoFill
  errors: FieldError | undefined
  label: string
  name: keyof ActivistInput
  register: UseFormRegister<ActivistInput>
  type?: HTMLInputElement['type']
}

export function TextField({ autocomplete, errors, label, name, register, type = 'text' }: Readonly<TextFieldProps>): JSX.Element {
  const fields = register(name, {
    required: {
      value: true,
      message: 'Campo obrigatório',
    },
    pattern: (type === 'email')
      ? {
          value: /[^@]@[^@]/,
          message: 'E-mail inválido',
        }
      : undefined,
  })

  return (
    <BaseTextField
      autocomplete={autocomplete}
      errors={errors}
      label={label}
      type={type}
      {...fields}
    />
  )
}

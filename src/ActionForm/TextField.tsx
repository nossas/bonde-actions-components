import type { FieldError, UseFormRegister } from 'react-hook-form'
import type { ActivistInput } from '../shared/types'

import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { useId } from '../shared/a11y'

export interface TextFieldProps {
  autocomplete?: AutoFill
  errors: FieldError | undefined
  label: string
  name: keyof ActivistInput
  register: UseFormRegister<ActivistInput>
  type?: HTMLInputElement['type']
}

export function TextField({ autocomplete, errors, label, name, register, type = 'text' }: Readonly<TextFieldProps>): JSX.Element {
  const id = useId()
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
  const ariaInvalid = errors ? 'true' : 'false'

  return (
    <FormControl isInvalid={!!errors}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        id={id}
        type={type}
        autoComplete={autocomplete}
        aria-invalid={ariaInvalid}
        {...fields}
      />
      {errors && (
        <FormErrorMessage role="alert">{errors?.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}

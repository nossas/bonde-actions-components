import type { FieldError, UseFormRegister } from 'react-hook-form'
import type { ActivistInput } from '../shared/types'

import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { useHookFormMask } from 'use-mask-input'

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
  const ariaInvalid = errors ? 'true' : 'false'

  return (
    <FormControl isInvalid={!!errors}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        id={name}
        type="tel"
        autoComplete="tel-national"
        pattern="[0-9]{2} [0-9]{4-5}-[0-9]{4}"
        aria-invalid={ariaInvalid}
        {...fields}
      />
      {errors && (
        <FormErrorMessage role="alert">{errors?.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}

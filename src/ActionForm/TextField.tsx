import type { FieldError, UseFormRegister } from 'react-hook-form'
import type { ActivistInput } from '../shared/types'

import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'

export interface TextFieldProps {
  autocomplete?: AutoFill
  errors: FieldError | undefined
  label: string
  name: keyof ActivistInput
  register: UseFormRegister<ActivistInput>
  type?: HTMLInputElement['type']
}

export function TextField({ autocomplete, errors, label, name, register, type = 'text' }: Readonly<TextFieldProps>): JSX.Element {
  const fields = register(name, { required: true })

  return (
    <FormControl isInvalid={!!errors}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input id={name} type={type} autoComplete={autocomplete} {...fields} />
      <FormErrorMessage>{errors?.message}</FormErrorMessage>
    </FormControl>
  )
}

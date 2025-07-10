import type { FieldError, UseFormRegister } from 'react-hook-form'
import type { ActivistInput } from '../shared/types'

import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { useHookFormMask } from 'use-mask-input'

export interface PhoneFieldProps {
  autocomplete?: AutoFill
  errors: FieldError | undefined
  label: string
  name: keyof ActivistInput
  register: UseFormRegister<ActivistInput>
}

export function PhoneField({ autocomplete, errors, label, name, register }: Readonly<PhoneFieldProps>): JSX.Element {
  const registerWithMask = useHookFormMask(register)
  const fields = registerWithMask(name, ['99 9999-9999', '99 99999-9999'], { required: true })

  return (
    <FormControl isInvalid={!!errors}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input id={name} type="tel" autoComplete={autocomplete} {...fields} />
      <FormErrorMessage>{errors?.message}</FormErrorMessage>
    </FormControl>
  )
}

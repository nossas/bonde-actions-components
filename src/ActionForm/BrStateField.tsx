import type { FieldError, UseFormRegister } from 'react-hook-form'
import type { ActivistInput } from '../shared/types'

import { FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react'
import { useId } from '../shared/a11y'

export interface BrStateFieldProps {
  errors: FieldError | undefined
  label: string
  name: keyof ActivistInput
  register: UseFormRegister<ActivistInput>
}

const states = 'AC AL AM AP BA CE DF ES GO MA MG MS MT PA PB PE PI PR RJ RN RO RR RS SC SE SP TO'.split(' ')

export function BrStateField({ errors, label, name, register }: Readonly<BrStateFieldProps>): JSX.Element {
  const id = useId()
  const fields = register(name, {
    validate: (value) => {
      if (!value) {
        return 'Campo obrigatório'
      }
      return true
    },
  })
  const ariaInvalid = errors ? 'true' : 'false'

  return (
    <FormControl isInvalid={!!errors}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Select id={id} aria-invalid={ariaInvalid} {...fields}>
        <option key="" value=""></option>
        {states.map(uf => (
          <option key={uf} value={uf}>{uf}</option>
        ))}
      </Select>
      {errors && (
        <FormErrorMessage role="alert">{errors?.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}

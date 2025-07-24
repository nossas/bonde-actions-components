import type { FieldError, UseFormRegister } from 'react-hook-form'
import type { ActivistInput } from '../shared/types'

import { SelectField } from '../shared/components/SelectField'

export interface BrStateFieldProps {
  errors: FieldError | undefined
  label: string
  name: keyof ActivistInput
  register: UseFormRegister<ActivistInput>
}

const states = 'AC AL AM AP BA CE DF ES GO MA MG MS MT PA PB PE PI PR RJ RN RO RR RS SC SE SP TO'.split(' ')

export function BrStateField({ errors, label, name, register }: Readonly<BrStateFieldProps>): JSX.Element {
  const fields = register(name, {
    validate: (value) => {
      if (!value) {
        return 'Campo obrigatório'
      }
      return true
    },
  })

  return (
    <SelectField
      errors={errors}
      label={label}
      {...fields}
    >
      <option key="" value=""></option>
      {states.map(uf => (
        <option key={uf} value={uf}>{uf}</option>
      ))}
    </SelectField>
  )
}

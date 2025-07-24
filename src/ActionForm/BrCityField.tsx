import type { FieldError, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form'
import type { ActivistInput } from '../shared/types'

import { useEffect } from 'react'
import useSWRImmutable from 'swr/immutable'
import { SelectField } from '../shared/components/SelectField'
import { EMPTY_ARR } from '../shared/constants'

export interface BrCityFieldProps {
  errors: FieldError | undefined
  label: string
  name: keyof ActivistInput
  register: UseFormRegister<ActivistInput>
  setValue: UseFormSetValue<ActivistInput>
  watch: UseFormWatch<ActivistInput>
}

interface BrCity {
  id: number
  nome: string
}

async function fetchCities(uf: string): Promise<BrCity[]> {
  if (!uf) {
    return Promise.resolve(EMPTY_ARR)
  }
  const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
  return res.json()
}

export function BrCityField({ errors, label, name, register, setValue, watch }: Readonly<BrCityFieldProps>): JSX.Element {
  const fields = register(name, {
    validate: (value) => {
      if (!value) {
        return 'Campo obrigatório'
      }
      return true
    },
  })

  const state = watch('state') ?? ''

  const { data: cities } = useSWRImmutable(state, fetchCities)

  useEffect(() => {
    setValue('city', '')
  }, [setValue, state])

  return (
    <SelectField
      errors={errors}
      label={label}
      {...fields}
    >
      <option key="" value=""></option>
      {cities?.map(city => (
        <option key={city.id} value={city.nome}>{city.nome}</option>
      ))}
    </SelectField>
  )
}

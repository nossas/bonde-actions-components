import type { FieldError, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form'
import type { ActivistInput } from '../shared/types'

import { FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react'
import { useEffect } from 'react'
import useSWRImmutable from 'swr/immutable'

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

const EMPTY_ARR: unknown[] = []

async function fetchCities(uf: string): Promise<BrCity[]> {
  if (!uf) {
    return Promise.resolve(EMPTY_ARR as BrCity[])
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
  const ariaInvalid = errors ? 'true' : 'false'

  const state = watch('state') ?? ''

  const { data: cities } = useSWRImmutable(state, fetchCities)

  useEffect(() => {
    setValue('city', '')
  }, [setValue, state])

  return (
    /* @ts-expect-errors:2590 Expression produces a union type that is too complex to represent. */
    <FormControl isInvalid={!!errors}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Select id={name} aria-invalid={ariaInvalid} {...fields}>
        <option key="" value=""></option>
        {cities?.map(city => (
          <option key={city.id} value={city.nome}>{city.nome}</option>
        ))}
      </Select>
      {errors && (
        <FormErrorMessage role="alert">{errors?.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}

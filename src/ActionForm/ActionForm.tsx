import type { SubmitHandler } from 'react-hook-form'
import type { ActivistInput } from '../shared/types'

import { Button, VStack } from '@chakra-ui/react'
import { useCallback, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { PhoneField } from './PhoneField'
import { TextField } from './TextField'

export interface ActionFormProps {
  brandColor: string
  fields: Array<keyof ActivistInput>
  submitLabel?: string
  widgetId: number
  onSubmit: SubmitHandler<ActivistInput>
}

function getDefaultValues(fields: Array<keyof ActivistInput>): ActivistInput {
  const defaultValues: ActivistInput = {
    email: '',
    name: '',
  }
  for (const field of fields) {
    defaultValues[field] = ''
  }
  return defaultValues
}

function getFieldsMap(fields: Array<keyof ActivistInput>): Record<keyof ActivistInput, boolean> {
  const map: Record<string, boolean> = {}
  for (const field of fields) {
    map[field] = true
  }
  return map
}

export function ActionForm({ brandColor, fields, submitLabel = 'Enviar', onSubmit }: Readonly<ActionFormProps>): JSX.Element {
  const defaultValues = useMemo(() => getDefaultValues(fields), [fields])
  const existingFields = useMemo(() => getFieldsMap(fields), [fields])

  const { formState: { errors, isSubmitting }, handleSubmit, register } = useForm({
    defaultValues,
  })

  const innerOnSubmit = useCallback((data: ActivistInput) => {
    if (data.first_name && data.last_name && !data.name) {
      data.name = `${data.first_name} ${data.last_name}`
    }
    onSubmit(data)
  }, [onSubmit])

  return (
    <form onSubmit={handleSubmit(innerOnSubmit)}>
      <VStack gap={2}>
        {(existingFields.first_name) && (
          <TextField
            key="first_name"
            name="first_name"
            label="Nome"
            autocomplete="given-name"
            errors={errors.first_name}
            register={register}
          />
        )}

        {(existingFields.last_name) && (
          <TextField
            key="last_name"
            name="last_name"
            type="text"
            label="Sobrenome"
            autocomplete="family-name"
            errors={errors.last_name}
            register={register}
          />
        )}

        {(existingFields.name) && (
          <TextField
            key="name"
            name="name"
            type="text"
            label="Nome"
            autocomplete="name"
            errors={errors.name}
            register={register}
          />
        )}

        <TextField
          key="email"
          name="email"
          type="email"
          label="E-mail"
          autocomplete="email"
          errors={errors.email}
          register={register}
        />

        {(existingFields.phone) && (
          <PhoneField
            key="phone"
            name="phone"
            label="Telefone"
            autocomplete="tel-national"
            errors={errors.phone}
            register={register}
          />
        )}

        <Button
          type="submit"
          backgroundColor={brandColor}
          color="white"
          isFullWidth
          isLoading={isSubmitting}
          variant="solid"
          _hover={{ bg: brandColor }}
        >
          {submitLabel}
        </Button>
      </VStack>
    </form>
  )
}

import type { ForwardedRef, ReactNode } from 'react'
import type { SubmitHandler, UseFormRegister, UseFormReset, UseFormSetValue, UseFormWatch } from 'react-hook-form'
import type { ActivistInput } from '../shared/types'

import { Button, Grid, GridItem, VStack } from '@chakra-ui/react'
import { forwardRef, useCallback, useImperativeHandle, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { BrCityField } from './BrCityField'
import { BrPhoneField } from './BrPhoneField'
import { BrStateField } from './BrStateField'
import { TextField } from './TextField'

export interface ActionFormHandle {
  reset: UseFormReset<ActivistInput>
}

export interface ActionFormChildrenProps {
  register: UseFormRegister<any>
  setValue: UseFormSetValue<any>
  watch: UseFormWatch<any>
}

export interface ActionFormProps {
  brandColor: string
  children?: (props: ActionFormChildrenProps) => ReactNode
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

export const ActionForm = forwardRef((
  { brandColor, children, fields, submitLabel = 'Enviar', onSubmit }: Readonly<ActionFormProps>,
  ref: ForwardedRef<ActionFormHandle>,
): JSX.Element => {
  const defaultValues = useMemo(() => getDefaultValues(fields), [fields])
  const existingFields = useMemo(() => getFieldsMap(fields), [fields])

  const { formState: { errors, isSubmitting }, handleSubmit, register, reset, setValue, watch } = useForm({
    defaultValues,
  })

  const innerOnSubmit = useCallback((data: ActivistInput) => {
    if (data.first_name && data.last_name && !data.name) {
      data.name = `${data.first_name} ${data.last_name}`
    }
    onSubmit(data)
  }, [onSubmit])

  useImperativeHandle(ref, () => ({
    reset,
  }), [reset])

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
          <BrPhoneField
            key="phone"
            name="phone"
            label="Telefone"
            errors={errors.phone}
            register={register}
          />
        )}

        {(existingFields.state) && (
          <Grid gap={4} gridTemplateColumns="1fr 2fr" style={{ width: '100%' }}>
            <GridItem>
              <BrStateField
                key="state"
                name="state"
                label="Estado"
                errors={errors.state}
                register={register}
              />
            </GridItem>

            {(existingFields.city) && (
              <GridItem>
                <BrCityField
                  key="city"
                  name="city"
                  label="Cidade"
                  errors={errors.city}
                  register={register}
                  setValue={setValue}
                  watch={watch}
                />
              </GridItem>
            )}
          </Grid>
        )}

        {(children) ? children({ register, setValue, watch }) : null}

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
})

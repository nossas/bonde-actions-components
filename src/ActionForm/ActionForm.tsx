import type { CSSProperties, ForwardedRef, ReactNode } from 'react'
import type { SubmitHandler, UseFormRegister, UseFormReset, UseFormSetValue, UseFormWatch } from 'react-hook-form'
import type { ActivistInput } from '../shared/types'

import { forwardRef, useCallback, useImperativeHandle, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../shared/components/Button'
import { EMPTY_STYLE } from '../shared/constants'
import { BrCityField } from './BrCityField'
import { BrPhoneField } from './BrPhoneField'
import { BrStateField } from './BrStateField'
import { TextField } from './TextField'

import './style.css'

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
  style?: CSSProperties
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
  { brandColor, children, fields, style = EMPTY_STYLE, submitLabel = 'Enviar', onSubmit }: Readonly<ActionFormProps>,
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
    <form
      className="bonde-action-form"
      style={{ '--bonde-action-brand-color': brandColor, ...style } as CSSProperties}
      onSubmit={handleSubmit(innerOnSubmit)}
    >
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
        <div className="bonde-action-form__city-row">
          <BrStateField
            key="state"
            name="state"
            label="Estado"
            errors={errors.state}
            register={register}
          />

          {(existingFields.city) && (
            <BrCityField
              key="city"
              name="city"
              label="Cidade"
              errors={errors.city}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          )}
        </div>
      )}

      {(children) ? children({ register, setValue, watch }) : null}

      <Button type="submit" isLoading={isSubmitting}>
        {submitLabel}
      </Button>
    </form>
  )
})

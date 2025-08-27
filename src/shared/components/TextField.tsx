import type { ClassValue } from 'clsx'
import type { ForwardedRef, HTMLProps } from 'react'
import type { FieldError } from 'react-hook-form'

import { clsx } from 'clsx'
import { forwardRef } from 'react'
import { useId } from '../a11y'

export interface TextFieldProps extends Omit<HTMLProps<HTMLInputElement>, 'className'> {
  autocomplete?: AutoFill
  className?: ClassValue
  errors?: FieldError
  label?: string
  name: string
  type?: HTMLInputElement['type']
  addon?: React.ReactElement
}

export const TextField = forwardRef((
  { autocomplete, className, errors, label, name, addon, type = 'text', ...props }: Readonly<TextFieldProps>,
  ref: ForwardedRef<HTMLInputElement>,
): JSX.Element => {
  const id = useId()
  const ariaInvalid = errors ? 'true' : 'false'

  const inputElement = (
    <input
      id={id}
      autoComplete={autocomplete}
      name={name}
      ref={ref}
      type={type}
      aria-invalid={ariaInvalid}
      {...props}
    />
  )

  return (
    <div className={clsx('bonde-action-field', className)}>
      <label htmlFor={id}>{label}</label>
      {addon ? (
        <div className="flex gap-2">
          {addon}
          {inputElement}
        </div>
      ) : inputElement}
      {errors && (
        <div className="bonde-action-field__error" role="alert">{errors?.message}</div>
      )}
    </div>
  )
})

import type { ClassValue } from 'clsx'
import type { ForwardedRef, HTMLProps, ReactNode } from 'react'
import type { FieldError } from 'react-hook-form'

import { clsx } from 'clsx'
import { forwardRef } from 'react'
import { useId } from '../a11y'

export interface SelectFieldProps extends Omit<HTMLProps<HTMLSelectElement>, 'className'> {
  children: ReactNode
  className?: ClassValue
  errors?: FieldError
  label: string
  name: string
}

export const SelectField = forwardRef((
  { children, className, errors, label, name, ...props }: Readonly<SelectFieldProps>,
  ref: ForwardedRef<HTMLSelectElement>,
): JSX.Element => {
  const id = useId()
  const ariaInvalid = errors ? 'true' : 'false'

  return (
    <div className={clsx('bonde-action-field', className)}>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        ref={ref}
        aria-invalid={ariaInvalid}
        {...props}
      >
        {children}
      </select>
      {errors && (
        <div className="bonde-action-field__error" role="alert">{errors?.message}</div>
      )}
    </div>
  )
})

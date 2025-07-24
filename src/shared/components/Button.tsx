import type { ClassValue } from 'clsx'
import type { HTMLProps, ReactNode } from 'react'

import { clsx } from 'clsx'

export interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'className'> {
  children: ReactNode
  className?: ClassValue
  disabled?: boolean
  isLink?: boolean
  isText?: boolean
  isLoading?: boolean
  type?: HTMLButtonElement['type']
}

export function Button({
  children,
  className,
  disabled = false,
  isLink = false,
  isLoading = false,
  isText = false,
  type = 'button',
  ...props
}: Readonly<ButtonProps>): JSX.Element {
  const classNames = clsx(
    'bonde-action-button',
    isLink && 'bonde-action-button--link',
    isLoading && 'bonde-action-button--loading',
    (isText || isLink) && 'bonde-action-button--text',
    className,
  )
  return (
    <button
      className={classNames}
      disabled={disabled || isLoading}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

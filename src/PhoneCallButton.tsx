import type { ReactElement } from 'react'
import { useCallback, useEffect, useState } from 'react'

function NOOP(): void {}

interface ButtonProps {
  children: string
  onClick: (event: unknown) => void
}

function DefaultButton({ children, onClick }: Readonly<ButtonProps>): JSX.Element {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  )
}

export interface PhoneCallButtonProps {
  buttonComponent?: (props: ButtonProps) => JSX.Element
  callText?: string
  callingText?: string
  onComplete?: () => void
}

export function PhoneCallButton({
  buttonComponent: Button = DefaultButton,
  callText = 'Ligar',
  callingText = 'Ligando',
  onComplete = NOOP,
}: Readonly<PhoneCallButtonProps>): ReactElement {
  const [calling, setCalling] = useState(false)

  useEffect(() => {

  }, [calling])

  const startCall = useCallback(() => {
    if (calling) {
      return
    }

    setCalling(true)
  }, [calling, setCalling])

  return (
    <Button onClick={startCall}>
      {calling ? callingText : callText}
    </Button>
  )
}

import type { ReactElement } from 'react'
import { useCallback, useEffect, useMemo } from 'react'
import { useMachine } from 'react-robot'

import { makePhoneCall } from './api'
import { machine } from './machine'

function NOOP(): void {}

interface ButtonProps {
  className: string
  children: string
  onClick: (event: unknown) => void
}

function DefaultButton({ children, className, onClick }: Readonly<ButtonProps>): JSX.Element {
  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
    </button>
  )
}

export interface PhoneCallButtonProps {
  buttonComponent?: (props: ButtonProps) => JSX.Element
  callText?: string
  callingClass?: string
  callingText?: string
  failedClass?: string
  finishedClass?: string
  idleClass?: string
  retryClass?: string
  retryText?: string
  targetPhoneNumber: string
  userPhoneNumber: string
  onFail?: () => void
  onSuccess?: () => void
}

export function PhoneCallButton({
  buttonComponent: Button = DefaultButton,
  callText = 'Ligar',
  callingClass = 'calling',
  callingText = 'Ligando',
  failedClass = 'failed',
  finishedClass = 'finished',
  idleClass = 'idle',
  retryClass = 'retry',
  retryText = 'Tentar novamente',
  targetPhoneNumber,
  userPhoneNumber,
  onFail = NOOP,
  onSuccess = NOOP,
}: Readonly<PhoneCallButtonProps>): ReactElement {
  const [{ name: state }, send] = useMachine(machine)

  const isCalling = state === 'calling'

  useEffect(() => {
    if (state === 'failed') {
      onFail()
    }
    else if (state === 'finished') {
      onSuccess()
    }
  }, [onFail, onSuccess, state])

  useEffect(() => {
    async function makeCall(): Promise<void> {
      makePhoneCall(userPhoneNumber, targetPhoneNumber).then((success) => {
        send(success ? 'finish' : 'fail')
      })
    }

    makeCall()
  }, [targetPhoneNumber, userPhoneNumber, send, state])

  const className = useMemo(() => {
    switch (state) {
      case 'calling':
        return callingClass
      case 'failed':
        return failedClass
      case 'finished':
        return finishedClass
      case 'retry':
        return retryClass
      case 'idle':
      default:
        return idleClass
    }
  }, [callingClass, failedClass, finishedClass, idleClass, retryClass, state])

  const startCall = useCallback(() => {
    send('call')
  }, [send])

  return (
    <Button className={className} onClick={startCall}>
      {isCalling ? callingText : callText}
    </Button>
  )
}

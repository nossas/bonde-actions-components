import type { State } from './machine'

import { useCallback, useEffect, useMemo } from 'react'
import { useMachine } from 'react-robot'

import { makePhoneCall } from './api'
import { machine } from './machine'

function NOOP(): void { }

interface ButtonProps {
  className: string
  children: string
  onClick: (event: unknown) => void
}

interface ChildrenProps {
  state: State
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
  children?: (props: ChildrenProps) => JSX.Element
  idleClass?: string
  retryClass?: string
  targetPhoneNumbers: string[]
  userPhoneNumber: string
  onFail?: () => void
  onSuccess?: () => void
}

export function PhoneCallButton({
  buttonComponent: Button = DefaultButton,
  children,
  idleClass = 'idle',
  retryClass = 'retry',
  targetPhoneNumbers,
  userPhoneNumber,
  onFail = NOOP,
  onSuccess = NOOP,
}: Readonly<PhoneCallButtonProps>): JSX.Element {
  const [{ name: state, context }, send] = useMachine(machine)

  const randomizedPhoneNumbers = useMemo(() => {
    if (targetPhoneNumbers.length <= 1) {
      return targetPhoneNumbers
    }

    const shuffledArray = [...targetPhoneNumbers]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
    }
    return shuffledArray
  }, [targetPhoneNumbers])

  const targetPhoneNumber = randomizedPhoneNumbers[context.retries % randomizedPhoneNumbers.length]

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
      await makePhoneCall(send, userPhoneNumber, targetPhoneNumber)
    }

    if (state === 'ringing') {
      makeCall()
    }
  }, [targetPhoneNumber, userPhoneNumber, send, state])

  const startCall = useCallback(() => {
    send('ring')
  }, [send])

  if (children) {
    return children({ state: state as State, onClick: startCall })
  }

  switch (state as State) {
    case 'calling': {
      return (
        <div className="bonde-phone-call bonde-phone-call--calling">
          {`Falando com ${targetPhoneNumber} agora`}
        </div>
      )
    }
    case 'failed': {
      return (
        <div className="bonde-phone-call bonde-phone-call--failed">
          A ligação falhou
        </div>
      )
    }
    case 'finished': {
      return (
        <div className="bonde-phone-call bonde-phone-call--finished">
          Ligação encerrada
        </div>
      )
    }
    case 'retry': {
      return (
        <div className="bonde-phone-call bonde-phone-call--retry">
          <Button className={retryClass} onClick={startCall}>Tentar novamente</Button>
        </div>
      )
    }
    case 'ringing': {
      return (
        <div className="bonde-phone-call bonde-phone-call--ringing">
          {`Ligando para ${targetPhoneNumber}...`}
        </div>
      )
    }
    case 'idle':
    default: {
      return (
        <div className="bonde-phone-call bonde-phone-call--idle">
          <Button className={idleClass} onClick={startCall}>Ligar</Button>
        </div>
      )
    }
  }
}

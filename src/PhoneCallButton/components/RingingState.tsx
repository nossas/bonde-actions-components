import type { PhoneTarget } from '..'

interface RingingCallProps {
  target: PhoneTarget
}

export function RingingCall({ target }: Readonly<RingingCallProps>): JSX.Element {
  return (
    <div className="bonde-phone-call__ringing">
      {`Ligando para ${target.label}…`}
    </div>
  )
}

import type { PhoneTarget } from '..'

interface ActionCallProps {
  target: PhoneTarget
}

export function ActiveCall({ target }: Readonly<ActionCallProps>): JSX.Element {
  return (
    <div className="bonde-phone-call__talking">
      {`Falando com ${target.label} agora`}
    </div>
  )
}

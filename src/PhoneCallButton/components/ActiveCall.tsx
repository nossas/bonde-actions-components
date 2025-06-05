import type { PhoneTarget } from '..'

import { ActiveIcon } from '../icons/Active'

interface ActionCallProps {
  target: PhoneTarget
}

export function ActiveCall({ target }: Readonly<ActionCallProps>): JSX.Element {
  return (
    <div className="bonde-phone-call bonde-phone-call--active">
      <div className="bonde-phone-call__card">
        <div className="bonde-phone-call__card-icon">
          <ActiveIcon />
        </div>
        <div className="bonde-phone-call__card-body">
          <p>Você está falando com <strong>{target.label}</strong> agora.</p>
        </div>
      </div>
    </div>
  )
}

import type { PhoneTarget } from '..'

import { RingingIcon } from '../icons/Ringing'

interface RingingCallProps {
  target: PhoneTarget
}

export function RingingCall({ target }: Readonly<RingingCallProps>): JSX.Element {
  return (
    <div className="bonde-phone-call bonde-phone-call--ringing">
      <div className="bonde-phone-call__card">
        <div className="bonde-phone-call__card-icon">
          <RingingIcon />
        </div>
        <div className="bonde-phone-call__card-body">
          <p>
            {'Ligando para '}
            <strong>{target.label}</strong>
            …
          </p>
        </div>
      </div>
      <p>Fique perto do telefone para atender a chamada.</p>
    </div>
  )
}

import { FinishedIcon } from '../icons/Finished'

export function FinishedCall(): JSX.Element {
  return (
    <div className="bonde-phone-call bonde-phone-call--finished">
      <div className="bonde-phone-call__card">
        <div className="bonde-phone-call__card-icon">
          <FinishedIcon />
        </div>
        <div className="bonde-phone-call__card-body">
          <p>A ligação foi encerrada.</p>
        </div>
      </div>
    </div>
  )
}

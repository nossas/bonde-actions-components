import { FailedIcon } from '../icons/Failed'

interface RetryCallProps {
  onRetry: () => void
}

export function RetryCall({ onRetry }: Readonly<RetryCallProps>): JSX.Element {
  return (
    <div className="bonde-phone-call bonde-phone-call--failed">
      <div className="bonde-phone-call__card">
        <div className="bonde-phone-call__card-icon">
          <FailedIcon />
        </div>
        <div className="bonde-phone-call__card-body">
          <p>Não foi possível estabelecer a ligação.</p>
        </div>
      </div>
      <button type="button" onClick={onRetry}>
        Tentar novamente
      </button>
    </div>
  )
}

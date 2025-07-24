import { BsTelephoneFill } from 'react-icons/bs'
import { Button } from '../../shared/components/Button'

export interface RetryButtonProps {
  backgroundColor: string
  onRetry: () => void
}

export function RetryButton({ onRetry }: Readonly<RetryButtonProps>): JSX.Element {
  return (
    <Button className="bonde-phone-call__retry-button" onClick={onRetry}>
      <BsTelephoneFill />
      Tentar novamente
    </Button>
  )
}

import { Button } from '@chakra-ui/react'
import { BsTelephoneFill } from 'react-icons/bs'

export interface RetryButtonProps {
  onRetry: () => void
}

export function RetryButton({ onRetry }: Readonly<RetryButtonProps>): JSX.Element {
  return (
    <Button
      className="bonde-phone-call__retry-button"
      leftIcon={<BsTelephoneFill />}
      type="button"
      variant="solid"
      onClick={onRetry}
    >
      Tentar novamente
    </Button>
  )
}

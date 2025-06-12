import { Button } from '@chakra-ui/react'
import { BsTelephoneFill } from 'react-icons/bs'

export interface RetryButtonProps {
  onRetry: () => void
}

export function RetryButton({ onRetry }: RetryButtonProps): JSX.Element {
  return (
    <Button type="button" variant="solid" onClick={onRetry}>
      <BsTelephoneFill />
      Tentar novamente
    </Button>
  )
}

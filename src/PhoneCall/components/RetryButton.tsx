import { Button } from '@chakra-ui/react'
import { BsTelephoneFill } from 'react-icons/bs'

export interface RetryButtonProps {
  onRetry: () => void
}

export function RetryButton({ onRetry }: Readonly<RetryButtonProps>): JSX.Element {
  return (
    <Button type="button" variant="solid" leftIcon={<BsTelephoneFill />} onClick={onRetry}>
      Tentar novamente
    </Button>
  )
}

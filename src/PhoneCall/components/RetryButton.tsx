import { Button } from '@chakra-ui/react'
import { BsTelephoneFill } from 'react-icons/bs'

export interface RetryButtonProps {
  backgroundColor: string
  onRetry: () => void
}

export function RetryButton({ backgroundColor, onRetry }: Readonly<RetryButtonProps>): JSX.Element {
  return (
    <Button
      className="bonde-phone-call__retry-button"
      backgroundColor={backgroundColor}
      color="white"
      rounded="lg"
      type="button"
      variant="solid"
      onClick={onRetry}
    >
      <BsTelephoneFill />
      {' '}
      Tentar novamente
    </Button>
  )
}

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
      leftIcon={<BsTelephoneFill />}
      type="button"
      variant="solid"
      onClick={onRetry}
      _hover={{ bg: backgroundColor }}
    >
      Tentar novamente
    </Button>
  )
}

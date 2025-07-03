import type { BondeTheme } from '../../shared/theme'

import { Button } from '@chakra-ui/react'
import { BsTelephoneFill } from 'react-icons/bs'

export interface RetryButtonProps {
  canRetry: boolean
  theme: BondeTheme
  onRetry: () => void
}

export function RetryButton({ canRetry, theme, onRetry }: Readonly<RetryButtonProps>): JSX.Element | null {
  if (!canRetry) {
    return null
  }

  return (
    <Button
      className="bonde-phone-call__retry-button"
      backgroundColor={theme.default.background.main}
      color={theme.default.color.main}
      leftIcon={<BsTelephoneFill />}
      type="button"
      variant="solid"
      onClick={onRetry}
      _hover={{ bg: theme.default.background.hover }}
      _focus={{ bg: theme.default.background.focus }}
    >
      Tentar novamente
    </Button>
  )
}

import { Button, Flex, Icon } from '@chakra-ui/react'
import { BsTelephoneFill } from 'react-icons/bs'

export interface RetryButtonProps {
  onRetry: () => void
}

export function RetryButton({ onRetry }: Readonly<RetryButtonProps>): JSX.Element {
  return (
    <Button type="button" variant="solid" onClick={onRetry}>
      <Flex align="center" gap={2}>
        <Icon as={BsTelephoneFill} />
        <span>Tentar novamente</span>
      </Flex>
    </Button>
  )
}

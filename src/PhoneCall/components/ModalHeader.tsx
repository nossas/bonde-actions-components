import type { IconType } from 'react-icons'
import type { BondeTheme } from '../../shared/theme'

import { ModalHeader as ChakraModalHeader, Flex, Icon } from '@chakra-ui/react'

export interface ModalHeaderProps {
  icon: IconType
  theme: BondeTheme
  title: string
}

export function ModalHeader({ icon, theme, title }: Readonly<ModalHeaderProps>): JSX.Element {
  return (
    /* @ts-expect-errors:2590 Expression produces a union type that is too complex to represent. */
    <ChakraModalHeader>
      <Flex align="center" gap={2}>
        <Icon as={icon} boxSize={6} color={theme.brand.main} />
        <span>{title}</span>
      </Flex>
    </ChakraModalHeader>
  )
}

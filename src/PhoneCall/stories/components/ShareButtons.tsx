import type { BondeTheme } from '../../../shared/theme'

import { Button, VStack } from '@chakra-ui/react'
import { BsLink45Deg } from 'react-icons/bs'

export interface ShareButtonsProps {
  theme: BondeTheme
}

export function ShareButtons({ theme }: Readonly<ShareButtonsProps>): JSX.Element {
  return (
    <VStack>
      <Button colorScheme="facebook" type="button" variant="solid">
        Compartilhar no Facebook
      </Button>
      <Button colorScheme="twitter" type="button" variant="solid">
        Compartilhar no Twitter
      </Button>
      <Button colorScheme="whatsapp" type="button" variant="solid">
        Compartilhar no WhatsApp
      </Button>
      <Button
        backgroundColor={theme.default.background.main}
        color={theme.default.color.main}
        leftIcon={<BsLink45Deg />}
        type="button"
        variant="solid"
        _hover={{ bg: theme.default.background.hover }}
        _focus={{ bg: theme.default.background.focus }}
      >
        Copiar link
      </Button>
    </VStack>
  )
}

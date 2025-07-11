import { Button, VStack } from '@chakra-ui/react'
import { BsLink45Deg } from 'react-icons/bs'

export interface ShareButtonsProps {
  brandColor?: string
}

export function ShareButtons({ brandColor = '#424242' }: Readonly<ShareButtonsProps>): JSX.Element {
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
        backgroundColor={brandColor}
        color="white"
        leftIcon={<BsLink45Deg />}
        type="button"
        variant="solid"
      >
        Copiar link
      </Button>
    </VStack>
  )
}

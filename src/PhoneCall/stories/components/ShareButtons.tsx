import { Button, VStack } from '@chakra-ui/react'
import { BsLink45Deg } from 'react-icons/bs'

export interface ShareButtonsProps {
  brandColor?: string
}

export function ShareButtons({ brandColor = '#424242' }: Readonly<ShareButtonsProps>): JSX.Element {
  return (
    <VStack>
      <Button backgroundColor="#1877f2" rounded="full" type="button" variant="solid">
        Compartilhar no Facebook
      </Button>
      <Button backgroundColor="#00aced" rounded="full" type="button" variant="solid">
        Compartilhar no Twitter
      </Button>
      <Button backgroundColor="#25d366" rounded="full" type="button" variant="solid">
        Compartilhar no WhatsApp
      </Button>
      <Button backgroundColor={brandColor} rounded="full" type="button" variant="solid">
        <BsLink45Deg />
        {' '}
        Copiar link
      </Button>
    </VStack>
  )
}

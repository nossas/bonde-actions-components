import { Button, VStack } from '@chakra-ui/react'
import { BsLink45Deg } from 'react-icons/bs'

export function ShareButtons(): JSX.Element {
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
      <Button colorScheme="gray" leftIcon={<BsLink45Deg />} type="button" variant="solid">
        Copiar link
      </Button>
    </VStack>
  )
}

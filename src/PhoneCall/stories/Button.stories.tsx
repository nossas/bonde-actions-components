import type { Decorator, Meta, StoryObj } from '@storybook/react'
import type { PhoneCallProps } from '..'

import { Button, ChakraProvider } from '@chakra-ui/react'
import { action } from '@storybook/addon-actions'
import { Theme } from 'bonde-components'
import { useState } from 'react'
import { PhoneCall } from '..'

const Decorators = function (Story, { args }): JSX.Element {
  const [started, setStarted] = useState(false)
  const showStory = (): void => setStarted(true)

  return (
    <ChakraProvider value={Theme}>
      <Button type="button" variant="solid" onClick={showStory}>
        Ligar
      </Button>
      <Story args={{ ...args, started }} />
    </ChakraProvider>
  )
} satisfies Decorator<PhoneCallProps>

const meta = {
  title: 'Phone Call/Button',
  component: PhoneCall,
  decorators: Decorators,
} satisfies Meta<typeof PhoneCall>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    script: 'Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!',
    started: true,
    userPhoneNumber: '+55 11 00000-0000',
    targets: [
      {
        label: 'Dep. Fulano',
        phoneNumber: '+55 22 00000-0000',
      },
      {
        label: 'Sen. Sicrana',
        phoneNumber: '+55 33 00000-0000',
      },
    ],
    onFail: action('fail'),
    onSuccess: action('success'),
  },
}

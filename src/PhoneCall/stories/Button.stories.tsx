import type { HandlerFunction } from '@storybook/addon-actions'
import type { Decorator, Meta, StoryObj } from '@storybook/react'
import type { PhoneCallProps } from '..'
import type { SetState } from '../../shared/react'

import { Button, ChakraProvider } from '@chakra-ui/react'
import { action } from '@storybook/addon-actions'
import { Theme } from 'bonde-components'
import { useState } from 'react'
import { PhoneCall } from '..'
import { ShareButtons } from './components/ShareButtons'

function wrapAction(action: HandlerFunction, setState: SetState<boolean>) {
  return (...args: any[]) => {
    setState(false)
    action(...args)
  }
}

const Decorators = function (Story, { args }): JSX.Element {
  const [started, setStarted] = useState(false)
  const showStory = (): void => setStarted(true)
  const onFinish = wrapAction(args.onFinish!, setStarted)

  return (
    <ChakraProvider>
      <Button type="button" variant="solid" onClick={showStory}>
        Ligar
      </Button>
      {started && (
        <Story args={{ ...args, onFinish }} />
      )}
    </ChakraProvider>
  )
} satisfies Decorator<PhoneCallProps>

const meta: Meta<typeof PhoneCall> = {
  title: 'Phone Call/Button',
  component: PhoneCall,
  decorators: Decorators,
  parameters: {
    controls: {
      exclude: ['children', 'onFail', 'onFinish', 'onSuccess'],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    children: <ShareButtons theme={Theme} />,
    script: 'Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!',
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
    theme: Theme,
    onFail: action('onFail'),
    onFinish: action('onFinish'),
    onSuccess: action('onSuccess'),
  },
}

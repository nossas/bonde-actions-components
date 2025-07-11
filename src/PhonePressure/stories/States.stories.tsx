import type { Meta, StoryObj } from '@storybook/react'
import type { PhoneCallAction } from '../api'
import type { PhoneCallState } from '../PhoneCall'

import { ChakraProvider } from '@chakra-ui/react'
import { action } from '@storybook/addon-actions'
import { PhoneCall } from '../PhoneCall'
import { ShareButtons } from './components/ShareButtons'

const meta: Meta<typeof PhoneCall> = {
  title: 'Phone Pressure/States',
  component: PhoneCall,
  decorators: Story => (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  ),
  args: {
    activist: {
      name: 'João da Silva',
      email: 'joao.da.silva@email.com.br',
      phone: '22 00000-0000',
    },
    children: <ShareButtons />,
    guideline: 'Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!',
    targets: [
      {
        name: 'Dep. Fulano',
        phone: '+55 22 00000-0000',
      },
      {
        name: 'Sen. Sicrana',
        phone: '+55 33 00000-0000',
      },
    ],
    onFail: action('onFail'),
    onFinish: action('onFinish'),
    onSuccess: action('onSuccess'),
  },
  parameters: {
    controls: {
      exclude: ['action', 'children', 'onFail', 'onFinish', 'onSuccess'],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

function wrapAction(state: PhoneCallState): PhoneCallAction {
  return async function (setState) {
    setState(state)
  }
}

export const Busy: Story = {
  args: {
    action: wrapAction('busy'),
  },
}

export const Canceled: Story = {
  args: {
    action: wrapAction('canceled'),
  },
}

export const Completed: Story = {
  args: {
    action: wrapAction('completed'),
  },
}

export const Failed: Story = {
  args: {
    action: wrapAction('failed'),
  },
}

export const InProgress: Story = {
  args: {
    action: wrapAction('in-progress'),
  },
}

export const Initiated: Story = {
  args: {
    action: wrapAction('initiated'),
  },
}

export const NoAnswer: Story = {
  args: {
    action: wrapAction('no-answer'),
  },
}

export const Ringing: Story = {
  args: {
    action: wrapAction('ringing'),
  },
}

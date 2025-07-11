import type { Decorator, Meta, StoryObj } from '@storybook/react'
import type { PhoneCallAction } from '../api'
import type { PhonePressureFormProps } from '../PhonePressureForm'

import { ChakraProvider } from '@chakra-ui/react'
import { action } from '@storybook/addon-actions'
import { sleep } from '../../shared/tests'
import { PhonePressureForm } from '../PhonePressureForm'
import { ShareButtons } from './components/ShareButtons'

const Decorators = function (Story): JSX.Element {
  return (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  )
} satisfies Decorator<PhonePressureFormProps>

const meta: Meta<typeof PhonePressureForm> = {
  title: 'Phone Call',
  component: PhonePressureForm,
  decorators: Decorators,
  argTypes: {
    guideline: {
      description: 'Roteiro da ligação',
      type: 'string',
    },
    linkColor: {
      description: 'Cor dos links do modal',
      type: 'string',
    },
    mainColor: {
      description: 'Cor primária da campanha',
      type: 'string',
    },
    targets: {
      description: 'Lista de alvos',
    },
    widgetId: {
      description: 'ID do widget do Bonde',
    },
  },
  parameters: {
    controls: {
      exclude: ['action', 'children', 'maxWidth', 'onFail', 'onSuccess'],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const successPhoneCall: PhoneCallAction = async (setState) => {
  await sleep(1000)
  setState('ringing')
  await sleep(3000)
  setState('in-progress')
  await sleep(3000)
  setState('completed')
}

export const Form: Story = {
  args: {
    action: successPhoneCall,
    children: <ShareButtons />,
    guideline: 'Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!',
    maxWidth: '40rem',
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
    widgetId: 0,
    onFail: action('onFail'),
    onSuccess: action('onSuccess'),
  },
}

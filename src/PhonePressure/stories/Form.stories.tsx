import type { Decorator, Meta, StoryObj } from '@storybook/react'
import type { PhoneCallAction } from '../api'
import type { PhonePressureFormProps } from '../PhonePressureForm'

import { ChakraProvider } from '@chakra-ui/react'
import { action } from '@storybook/addon-actions'
import { sleep } from '../../shared/tests'
import { PhonePressureForm } from '../PhonePressureForm'

const Decorators = function (Story): JSX.Element {
  return (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  )
} satisfies Decorator<PhonePressureFormProps>

const meta: Meta<typeof PhonePressureForm> = {
  title: 'Phone Pressure',
  component: PhonePressureForm,
  decorators: Decorators,
  args: {
    guideline: 'Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!',
    postActionHtml: '<p>A pós-ação vai aqui!</p>',
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
    onFinish: action('onFinish'),
    onSuccess: action('onSuccess'),
  },
  argTypes: {
    action: {
      description: 'Callback de ligação telefônica (por padrão, usa API do Bonde)',
      type: 'function',
    },
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
    postActionHtml: {
      description: 'HTML de compartilhamento da campanha',
    },
    targets: {
      description: 'Lista de alvos',
    },
    widgetId: {
      description: 'ID do widget do Bonde',
    },
    onFail: {
      description: 'Evento disparado quando a ligação falhou (número de tentativas excedido, usuário desistiu, etc.)',
      type: 'function',
    },
    onSuccess: {
      description: 'Evento disparado quando a ligação foi finalizada com sucesso',
      type: 'function',
    },
  },
  parameters: {
    controls: {
      exclude: ['action', 'maxWidth', 'onFail', 'onSuccess'],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const successPhoneCall: PhoneCallAction = async (_payload, setState) => {
  await sleep(1000)
  setState('ringing')
  await sleep(3000)
  setState('in-progress')
  await sleep(3000)
  setState('completed')
}

const failurePhoneCall: PhoneCallAction = async (_payload, setState) => {
  await sleep(1000)
  setState('ringing')
  await sleep(3000)
  setState('failed')
}

export const Success: Story = {
  args: {
    action: successPhoneCall,
    maxWidth: '40rem',
  },
}

export const Failure: Story = {
  args: {
    action: failurePhoneCall,
    maxWidth: '40rem',
  },
}

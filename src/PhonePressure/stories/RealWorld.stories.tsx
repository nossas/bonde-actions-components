import type { Decorator, Meta, StoryObj } from '@storybook/react'
import { configureBondePhoneCall } from '../api'
import type { PhonePressureFormProps } from '../PhonePressureForm'

import { action } from '@storybook/addon-actions'
import { PhonePressureForm } from '../PhonePressureForm'

const Decorators = function (Story): JSX.Element {
  return (
    <div style={{ maxWidth: '40rem' }}>
      <Story />
    </div>
  )
} satisfies Decorator<PhonePressureFormProps>

const meta: Meta<typeof PhonePressureForm> = {
  title: 'Phone Pressure/Real world',
  component: PhonePressureForm,
  decorators: Decorators,
  args: {
    action: configureBondePhoneCall('https://daceee1c7005.ngrok-free.app'),
    guideline: 'Olá, meu nome é [seu nome]. Estou ligando para pedir que [nome do alvo] faça [ação solicitada]. Essa decisão é muito importante porque [insira argumento principal]. Contamos com o apoio de vocês!',
    postActionHtml: '<p>A pós-ação vai aqui!</p>',
    targets: [
      {
        name: 'Luiz Guilherme',
        phone: '+55 11 97281-2720',
      },
    ],
    widgetId: 0,
    onFail: action('onFail'),
    onFinish: action('onFinish'),
    onSuccess: action('onSuccess'),
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {}

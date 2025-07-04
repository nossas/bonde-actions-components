import type { HandlerFunction } from '@storybook/addon-actions'
import type { Decorator, Meta, StoryObj } from '@storybook/react'
import type { PhoneCallProps } from '..'
import type { SetState } from '../../shared/react'
import type { PhoneCallAction } from '../api'

import { Button, ChakraProvider } from '@chakra-ui/react'
import { action } from '@storybook/addon-actions'
import { Theme } from 'bonde-components'
import { useState } from 'react'
import { PhoneCall } from '..'
import { sleep } from '../../shared/tests'
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
  title: 'Phone Call',
  component: PhoneCall,
  decorators: Decorators,
  argTypes: {
    action: {
      description: 'Callback de ligação telefônica (por padrão, usa API do Bonde)',
      type: 'function',
    },
    children: {
      description: 'Conteúdo exibido ao compartilhar a campanha',
      defaultValue: undefined,
      table: {
        type: 'JSX.Element',
      },
    },
    script: {
      description: 'Roteiro da ligação',
      type: 'string',
    },
    targets: {
      description: 'Lista de alvos',
    },
    theme: {
      description: 'Tema da campanha',
    },
    userPhoneNumber: {
      description: 'Número de telefone do usuário',
      type: 'string',
    },
    onFail: {
      description: 'Evento disparado quando a ligação falhou (número de tentativas excedido, usuário desistiu, etc.)',
      type: 'function',
    },
    onFinish: {
      description: 'Evento disparado quando a interação do usuário foi encerrada (o modal de ligação foi fechado)',
      type: 'function',
    },
    onSuccess: {
      description: 'Evento disparado quando a ligação foi finalizada com sucesso',
      type: 'function',
    },
  },
  parameters: {
    controls: {
      exclude: ['action', 'children', 'onFail', 'onFinish', 'onSuccess'],
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

const failurePhoneCall: PhoneCallAction = async (setState) => {
  await sleep(1000)
  setState('ringing')
  await sleep(3000)
  setState('failed')
}

export const Success: Story = {
  args: {
    action: successPhoneCall,
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

export const Failure: Story = {
  args: {
    action: failurePhoneCall,
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

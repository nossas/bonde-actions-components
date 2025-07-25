import type { Decorator, Meta, StoryObj } from '@storybook/react'

import type { ActionFormProps } from '../ActionForm'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { action } from '@storybook/addon-actions'
import { ActionForm } from '../ActionForm'

const Decorators = function (Story): JSX.Element {
  return (
    <ChakraProvider>
      <Box maxWidth="40rem">
        <Story />
      </Box>
    </ChakraProvider>
  )
} satisfies Decorator<ActionFormProps>

const meta: Meta<typeof ActionForm> = {
  title: 'Action Form',
  component: ActionForm,
  decorators: Decorators,
  argTypes: {
    brandColor: {
      description: 'Cor primária da campanha',
      type: 'string',
    },
    fields: {
      description: 'Lista de campos do formulário',
    },
    onSubmit: {
      description: 'Callback de envio do formulário',
      type: 'function',
    },
    submitLabel: {
      description: 'Texto do botão de envio do formulário',
      type: 'string',
      defaultValue: 'Enviar',
    },
    widgetId: {
      description: 'ID do widget',
      type: 'number',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Complete: Story = {
  args: {
    brandColor: 'rebeccapurple',
    fields: ['city', 'first_name', 'email', 'last_name', 'phone', 'state'],
    onSubmit: action('onSubmit'),
  },
}

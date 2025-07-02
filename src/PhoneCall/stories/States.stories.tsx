import type { Meta, StoryObj } from '@storybook/react'

import { ChakraProvider } from '@chakra-ui/react'
import { PhoneCallStates } from './components/PhoneCallStates'

const meta: Meta<typeof PhoneCallStates> = {
  title: 'Phone Call/States',
  component: PhoneCallStates,
  decorators: Story => (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  ),
  argTypes: {
    state: {
      control: { type: 'select' },
      options: [
        'busy',
        'canceled',
        'completed',
        'failed',
        'in-progress',
        'initiated',
        'no-answer',
        'queued',
        'ringing',
      ],
    },
    sharing: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    sharing: false,
    state: 'in-progress',
  },
}

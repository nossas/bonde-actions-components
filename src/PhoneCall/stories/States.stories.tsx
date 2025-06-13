import type { Meta, StoryObj } from '@storybook/react'

import { ChakraProvider } from '@chakra-ui/react'
import { Theme } from 'bonde-components'
import { PhoneCallStates } from './components/PhoneCallStates'

const meta = {
  title: 'Phone Call/States',
  component: PhoneCallStates,
  decorators: Story => (
    <ChakraProvider value={Theme}>
      <Story />
    </ChakraProvider>
  ),
} satisfies Meta<typeof PhoneCallStates>

export default meta

type Story = StoryObj<typeof meta>

export const Busy: Story = {
  args: {
    state: 'busy',
  },
}

export const Canceled: Story = {
  args: {
    state: 'canceled',
  },
}

export const Completed: Story = {
  args: {
    state: 'completed',
  },
}

export const Failed: Story = {
  args: {
    state: 'failed',
  },
}

export const Initiated: Story = {
  args: {
    state: 'initiated',
  },
}

export const InProgress: Story = {
  args: {
    state: 'in-progress',
  },
}

export const NoAnswer: Story = {
  args: {
    state: 'no-answer',
  },
}

export const Ringing: Story = {
  args: {
    state: 'ringing',
  },
}

export const ShareCampaign: Story = {
  args: {
    state: 'share',
  },
}

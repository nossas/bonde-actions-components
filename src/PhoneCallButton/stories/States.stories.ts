import type { Meta, StoryObj } from '@storybook/react-vite'

import { PhoneCallStates } from './States'

const meta = {
  title: 'Phone Call/States',
  component: PhoneCallStates,
} satisfies Meta<typeof PhoneCallStates>

export default meta

type Story = StoryObj<typeof meta>

export const Idle: Story = {
  args: {
    state: 'idle',
  },
}

export const Ringing: Story = {
  args: {
    state: 'ringing',
  },
}

export const Active: Story = {
  args: {
    state: 'active',
  },
}

export const Retry: Story = {
  args: {
    state: 'retry',
  },
}

export const Failed: Story = {
  args: {
    state: 'failed',
  },
}

export const Finished: Story = {
  args: {
    state: 'finished',
  },
}

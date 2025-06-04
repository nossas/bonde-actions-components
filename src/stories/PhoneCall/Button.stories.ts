import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import { PhoneCallButton } from '../../PhoneCallButton'

const meta = {
  title: 'Phone Call/Button',
  component: PhoneCallButton,
} satisfies Meta<typeof PhoneCallButton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    targetPhoneNumber: '',
    userPhoneNumber: '',
    onSuccess: fn,
  },
}

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
    targetPhoneNumbers: ['+55 22 00000-0000', '+55 33 00000-0000'],
    userPhoneNumber: '+55 11 00000-0000',
    onSuccess: fn,
  },
}

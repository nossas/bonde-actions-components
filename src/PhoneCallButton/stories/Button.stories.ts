import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import { PhoneCallButton } from '..'

const meta = {
  title: 'Phone Call/Button',
  component: PhoneCallButton,
} satisfies Meta<typeof PhoneCallButton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
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
    onSuccess: fn,
  },
}

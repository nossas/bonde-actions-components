import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

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
    onFail: action('fail'),
    onSuccess: action('success'),
  },
}

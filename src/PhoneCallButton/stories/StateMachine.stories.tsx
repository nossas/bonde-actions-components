import type { Meta, StoryObj } from '@storybook/react-vite'
import { Robot3Viz } from 'robot3-viz'

import { machine } from '../machine'

function StateMachine(): JSX.Element {
  return (
    <Robot3Viz fsm={machine} />
  )
}

const meta = {
  title: 'Phone Call/State machine',
  component: StateMachine,
} satisfies Meta<typeof StateMachine>

export default meta

type Story = StoryObj<typeof meta>

export const PhoneCall: Story = {
  args: {},
}

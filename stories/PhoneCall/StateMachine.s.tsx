import { Robot3Viz } from 'robot3-viz'

import { machine } from '../../src/PhoneCallButton/machine'

function StateMachine(): JSX.Element {
  return (
    <Robot3Viz fsm={machine} />
  )
}

const meta = {
  title: 'Phone Call/State machine',
  component: StateMachine,
}

export default meta

export const PhoneCall = {
  args: {},
}

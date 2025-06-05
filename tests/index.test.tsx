import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { PhoneCallButton } from '../src'

import '@testing-library/jest-dom'

describe('phoneCallButton', () => {
  it('renders', async () => {
    const { container, getByText } = render(
      <PhoneCallButton
        targetPhoneNumbers={['+55 22 00000-0000', '+55 33 00000-0000']}
        userPhoneNumber="+55 11 00000-0000"
      />,
    )

    const actionWrapper = container.firstChild
    expect(actionWrapper).toHaveClass('bonde-phone-call bonde-phone-call--idle')

    const actionButton = getByText('Ligar')
    expect(actionButton).toBeInTheDocument()
    expect(actionButton).toHaveClass('idle')

    await userEvent.click(actionButton)
    expect(actionWrapper).toHaveClass('bonde-phone-call--ringing')
  })
})

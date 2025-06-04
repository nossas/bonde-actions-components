import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { PhoneCallButton } from '../src'

import '@testing-library/jest-dom'

describe('phoneCallButton', () => {
  it('renders', async () => {
    render(
      <PhoneCallButton
        targetPhoneNumbers={['+55 22 00000-0000', '+55 33 00000-0000']}
        userPhoneNumber="+55 11 00000-0000"
      />,
    )

    const buttonElement = screen.getByText('Ligar')
    expect(buttonElement).toBeInTheDocument()

    await userEvent.click(buttonElement)
    expect(buttonElement).toHaveTextContent('Ligando')
  })
})

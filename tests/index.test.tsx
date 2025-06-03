import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { PhoneCallButton } from '../src'

import '@testing-library/jest-dom'

describe('phoneCallButton', () => {
  it('renders', async () => {
    render(<PhoneCallButton callText="Ligar" callingText="Ligando" />)

    const buttonElement = screen.getByText('Ligar')
    expect(buttonElement).toBeInTheDocument()

    await userEvent.click(buttonElement)
    expect(buttonElement).toHaveTextContent('Ligando')
  })
})

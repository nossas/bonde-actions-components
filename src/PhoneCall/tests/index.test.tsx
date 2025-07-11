import type { PhoneCallAction } from '../api'

import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { sleep } from '../../shared/tests'
import { PhonePressureForm } from '../PhonePressureForm'

import '@testing-library/jest-dom'

describe('phone pressure', () => {
  it('renders', async () => {
    const mockPhoneCall: PhoneCallAction = async (setState) => {
      await sleep(50)
      setState('ringing')
      await sleep(50)
      setState('in-progress')
      await sleep(50)
      setState('completed')
    }

    const { getByLabelText, getByRole } = render(
      <PhonePressureForm
        action={mockPhoneCall}
        guideline=""
        targets={[
          {
            name: 'Dep. Fulano',
            phone: '+55 22 00000-0000',
          },
          {
            name: 'Sen. Sicrana',
            phone: '+55 33 00000-0000',
          },
        ]}
        widgetId={0}
      />
    )

    const nameInput = getByLabelText('Nome')
    await userEvent.type(nameInput, 'John Doe')

    const emailInput = getByLabelText('E-mail')
    await userEvent.type(emailInput,'john.doe@example.org')

    const phoneInput = getByLabelText('Telefone')
    await userEvent.type(phoneInput, '11 00000-0000')

    const callButton = getByRole('button', { name: 'Ligar' })
    await userEvent.click(callButton)
    await waitFor(() => getByRole('dialog'))

    const callModal = getByRole('dialog')
    expect(callModal).toHaveClass('bonde-phone-call bonde-phone-call--ringing')

    await sleep(50)
    expect(callModal).toHaveClass('bonde-phone-call bonde-phone-call--in-progress')

    await sleep(50)
    expect(callModal).toHaveClass('bonde-phone-call bonde-phone-call--completed')
  })
})

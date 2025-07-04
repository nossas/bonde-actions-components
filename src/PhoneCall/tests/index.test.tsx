import type { PhoneCallAction } from '../api'

import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { describe, expect, it } from 'vitest'
import { PhoneCall } from '..'
import { ThemeProvider } from '../../shared/components/ThemeProvider'
import { sleep } from '../../shared/tests'

import '@testing-library/jest-dom/vitest'

describe('phone call', () => {
  it('renders', async () => {
    const mockPhoneCall: PhoneCallAction = async (setState) => {
      await sleep(50)
      setState('ringing')
      await sleep(50)
      setState('in-progress')
      await sleep(50)
      setState('completed')
    }

    const Component = () => {
      const [started, setStarted] = useState(false)
      return (
        <ThemeProvider>
          <button type="button" onClick={() => setStarted(true)}>
            Ligar
          </button>
          {started && (
            <PhoneCall
              action={mockPhoneCall}
              guideline=""
              phone="+55 11 00000-0000"
              targets={[
                {
                  label: 'Dep. Fulano',
                  phoneNumber: '+55 22 00000-0000',
                },
                {
                  label: 'Sen. Sicrana',
                  phoneNumber: '+55 33 00000-0000',
                },
              ]}
            />
          )}
        </ThemeProvider>
      )
    }

    const { container, getByRole } = render(<Component />)

    const callButton = getByRole('button', { name: 'Ligar' })
    await userEvent.click(callButton)
    await waitFor(() => getByRole('dialog'))

    const callModal = getByRole('dialog')
    expect(callModal).toHaveClass('bonde-phone-call bonde-phone-call--ringing')

    await waitFor(() => container.querySelector('.bonde-phone-call.bonde-phone-call--in-progress'))
    await waitFor(() => container.querySelector('.bonde-phone-call.bonde-phone-call--completed'))
  })
})

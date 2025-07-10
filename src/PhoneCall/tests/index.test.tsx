import type { PhoneCallAction } from '../api'

import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { describe, expect, it } from 'vitest'
import { sleep } from '../../shared/tests'
import { PhoneCall } from '../PhoneCall'

import '@testing-library/jest-dom'

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
        <>
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
                  name: 'Dep. Fulano',
                  phone: '+55 22 00000-0000',
                },
                {
                  name: 'Sen. Sicrana',
                  phone: '+55 33 00000-0000',
                },
              ]}
            />
          )}
        </>
      )
    }

    const { getByRole } = render(<Component />)

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

import type { PhoneCallAction } from '../api'

import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Theme } from 'bonde-components'
import { useState } from 'react'
import { describe, expect, it } from 'vitest'
import { PhoneCall } from '..'
import { sleep } from '../../shared/tests'

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
              script=""
              userPhoneNumber="+55 11 00000-0000"
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
              theme={Theme}
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

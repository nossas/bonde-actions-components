import type { PhoneCallState } from '..'
import type { SetState } from '../../shared/react'

import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Theme } from 'bonde-components'
import { useState } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { PhoneCall } from '..'
import { sleep } from '../../shared/tests'

import '@testing-library/jest-dom'

describe('phone call', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('renders', async () => {
    vi.mock('../api.ts', () => ({
      makePhoneCall: async (setState: SetState<PhoneCallState>) => {
        await sleep(50)
        setState('ringing')
        await sleep(50)
        setState('in-progress')
        await sleep(50)
        setState('completed')
        return true
      },
    }))

    const Component = () => {
      const [started, setStarted] = useState(false)
      return (
        <>
          <button type="button" onClick={() => setStarted(true)}>
            Ligar
          </button>
          <PhoneCall
            script=""
            started={started}
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

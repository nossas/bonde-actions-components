import type { Transition } from './machine'

type SendFn = (transition: Transition) => unknown

export function makePhoneCall(send: SendFn, userPhoneNumber: string, targetPhoneNumber: string): Promise<boolean> {
  // @TODO
  return new Promise((resolve) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        send('fail')
        resolve(false)
      }
      else {
        send('accept')
        setTimeout(() => {
          send('finish')
          resolve(true)
        }, 5_000)
      }
    }, 5_000)
  })
}

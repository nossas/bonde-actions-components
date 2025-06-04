import { createMachine, state as final, guard, reduce, state, transition } from 'robot3'

interface Context {
  retries: number
}

function context(): Context {
  return {
    retries: 0,
  }
}

function canRetry(ctx: Context): boolean {
  return ctx.retries < 2
}

function retry(ctx: Context): Context {
  return { ...ctx, retries: ctx.retries + 1 }
}

export type State = 'calling' | 'failed' | 'finished' | 'idle' | 'ringing' | 'retry'
export type Transition = 'accept' | 'fail' | 'finish' | 'ring'

export const machine = createMachine('idle', {
  idle: state(
    transition('ring', 'ringing'),
  ),
  ringing: state(
    transition('accept', 'calling'),
    transition('fail', 'retry', guard(canRetry), reduce(retry)),
    transition('fail', 'failed'),
  ),
  calling: state(
    transition('finish', 'finished'),
  ),
  retry: state(
    transition('ring', 'ringing'),
  ),
  failed: final(),
  finished: final(),
}, context)

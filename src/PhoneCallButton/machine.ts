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

export const machine = createMachine('idle', {
  idle: state(
    transition('call', 'calling'),
  ),
  calling: state(
    transition('fail', 'retry', guard(canRetry), reduce(retry)),
    transition('fail', 'failed'),
    transition('finish', 'finished'),
  ),
  retry: state(
    transition('call', 'calling'),
  ),
  failed: final(),
  finished: final(),
}, context)

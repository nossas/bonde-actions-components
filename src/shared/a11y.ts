import { useState } from 'react'

let counter = 0

export function useId(): string {
  const [id] = useState(() => ++counter)
  return `bonde-w-${id}`
}

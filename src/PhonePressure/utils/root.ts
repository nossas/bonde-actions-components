import { useMemo } from 'react'

export function useNearestRoot(child: HTMLElement | null): HTMLElement | undefined {
  const reactRoot = useMemo(() => {
    if (!child) {
      return undefined
    }

    let current = child
    while (current !== document.body) {
      if ('_reactRootContainer' in current) {
        break
      }
      current = current.parentElement!
    }
    return current
  }, [child])

  return reactRoot
}

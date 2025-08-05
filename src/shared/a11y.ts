import { useId as useReachId } from '@reach/auto-id'

export function useId(): string {
  const id = useReachId()
  return `bonde-w-${id}`
}

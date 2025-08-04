import { createContext } from 'react'
import { NOOP } from '../../shared/constants'

export interface ModalContextProps {
  canDismiss: boolean
  onDismiss: () => void
}

export const ModalContext = createContext<ModalContextProps>({
  canDismiss: false,
  onDismiss: NOOP,
})

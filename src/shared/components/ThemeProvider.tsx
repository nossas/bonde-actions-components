import type { ReactNode } from 'react'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

export interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: Readonly<ThemeProviderProps>): JSX.Element {
  return (
    <ChakraProvider value={defaultSystem}>
      {children}
    </ChakraProvider>
  )
}

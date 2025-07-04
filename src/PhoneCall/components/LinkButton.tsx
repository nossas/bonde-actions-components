import type { MouseEventHandler, ReactNode } from 'react'

import { Button } from '@chakra-ui/react'

export interface LinkButtonProps {
  children: ReactNode
  linkColor: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

export function LinkButton({ children, linkColor, onClick }: Readonly<LinkButtonProps>): JSX.Element {
  return (
    <Button className="bonde-phone-call__link-button" color={linkColor} size="md" type="button" variant="plain" onClick={onClick}>
      {children}
    </Button>
  )
}

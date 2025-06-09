import { Button } from '@chakra-ui/react'

interface IdleCallProps {
  onCall: () => void
}

export function IdleCall({ onCall }: Readonly<IdleCallProps>): JSX.Element {
  return (
    <div className="bonde-phone-call bonde-phone-call--idle">
      <Button type="button" variant="solid" onClick={onCall}>
        Ligar
      </Button>
    </div>
  )
}

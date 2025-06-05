interface IdleCallProps {
  onCall: () => void
}

export function IdleCall({ onCall }: Readonly<IdleCallProps>): JSX.Element {
  return (
    <div className="bonde-phone-call bonde-phone-call--idle">
      <button type="button" onClick={onCall}>
        Ligar
      </button>
    </div>
  )
}

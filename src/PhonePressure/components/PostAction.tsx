export interface PostActionProps {
  html: string
}

export function PostAction({ html: __html }: Readonly<PostActionProps>): JSX.Element {
  return (
    // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
    <div className="bonde-phone-call__post-action" dangerouslySetInnerHTML={{ __html }} />
  )
}

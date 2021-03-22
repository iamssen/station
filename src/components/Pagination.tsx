import { FC, ReactNode } from 'react'

type Props = {
  title?: string
  empty?: ReactNode
}

const Pagination: FC<Props> = (props) => {
  const { title, empty, children } = props

  const renderEmpty = () =>
    empty ? <>{empty}</> : <p>{title ? `No ${title}s` : 'No Data'}</p>

  const more = true

  return more ? (
    <>
      {children}
      <button>more</button>
    </>
  ) : (
    renderEmpty()
  )
}

export default Pagination

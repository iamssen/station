import { FC, ReactNode } from 'react'
import styles from './Pagination.module.scss'

type Props = {
  title?: string
  empty?: ReactNode
  more?: () => void
}

const Pagination: FC<Props> = ({ title, empty, more, children }) => {
  const renderEmpty = () =>
    empty ? <>{empty}</> : <p>{title ? `No ${title}s` : 'No Data'}</p>

  return more ? (
    <>
      {children}
      <button className={styles.more} onClick={more}>
        more
      </button>
    </>
  ) : (
    renderEmpty()
  )
}

export default Pagination

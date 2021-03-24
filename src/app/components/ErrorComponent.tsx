import React, { FC } from 'react'
import { AxiosError } from 'axios'
import { useInfo } from '@terra-money/use-station'
import { FORBIDDEN } from '@terra-money/use-station/components/ErrorBoundary'
import { getIsForbidden } from '@terra-money/use-station/components/ErrorBoundary'
import Info from './Info'

interface Props {
  card?: boolean
  error?: Error | AxiosError
}

const ErrorComponent: FC<Props> = ({ card, children, error }) => {
  const { ERROR } = useInfo()
  const props = { icon: 'sentiment_very_dissatisfied', card }

  const isForbidden = error && getIsForbidden(error)

  return isForbidden ? (
    <Info {...ERROR} {...props} content={FORBIDDEN} />
  ) : children ? (
    <Info {...props}>{children}</Info>
  ) : (
    <Info {...ERROR} {...props} />
  )
}

export default ErrorComponent

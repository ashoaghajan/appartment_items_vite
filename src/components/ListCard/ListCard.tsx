import React, { useEffect } from 'react'
import { ItemsWrapper } from './styles'
import { CardItem } from './CardItem/CardItem'
import { ItemServiceInstance } from '@/api/ItemsServiceApi'
import { useAsyncFetch } from '@/hooks/useAsyncFetch'
import { Spinner } from '../core/spinner'
import { ErrorText } from '../core/typography'

interface ListCardProps {}

export const ListCard: React.FC<ListCardProps> = () => {
  const fetchAction = () => {
    return ItemServiceInstance.getAllItems('/items')
  }
  const { data, loading, error, run } = useAsyncFetch(fetchAction)

  useEffect(() => {
    run()
  }, [])

  if (loading || !data) return <Spinner />

  if (error) {
    let message = 'Error while dysplaying data'
    if (error instanceof Error) {
      message = error.message
    }
    return (
      <div>
        <ErrorText>{message}</ErrorText>
      </div>
    )
  }

  if (!Array.isArray(data)) {
    return <div>Wrong data type</div>
  }

  return <ItemsWrapper>{data?.map(item => <CardItem key={item.id} item={item} />)}</ItemsWrapper>
}

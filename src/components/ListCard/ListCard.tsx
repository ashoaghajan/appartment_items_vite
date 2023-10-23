import React, { useEffect } from 'react'
import { ItemsWrapper } from './styles'
import { CardItem } from './CardItem/CardItem'
import { ItemServiceInstance } from '@/api/ItemsServiceApi'
import { useAsyncFetch } from '@/hooks/useAsyncFetch'
import { Spinner } from '@core/spinner'
import { ErrorText } from '@core/typography'
import { Item } from '@/types/dataTypes'

interface ListCardProps {}

export const ListCard: React.FC<ListCardProps> = () => {
  const fetchAction = () => {
    return ItemServiceInstance.getAllItems()
  }
  const { data, loading, error, run } = useAsyncFetch<Item[]>(fetchAction)

  useEffect(() => {
    run()
  }, [])

  if (loading || !data) return <Spinner />

  if (error) {
    return (
      <div>
        <ErrorText>{error.message}</ErrorText>
      </div>
    )
  }

  return (
    <ItemsWrapper>
      {data.map(item => (
        <CardItem key={item.id} item={item} />
      ))}
    </ItemsWrapper>
  )
}

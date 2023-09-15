import React, { useEffect } from 'react'
import { ItemsWrapper } from './styles'
import { CardItem } from './CardItem/CardItem'
import { ItemServiceInstance } from '@/api/ItemsServiceApi'
import { useAsyncFetch } from '@/hooks/useAsyncFetch'
import { Data } from '@/types/dataTypes'

interface ListCardProps {}

export const ListCard: React.FC<ListCardProps> = () => {
  const { data, loading, error, run } = useAsyncFetch(ItemServiceInstance.getAllItems)

  useEffect(() => {
    run()
  }, [])

  const dataIsArray = (data: Data[] | Data): data is Data[] => {
    return Array.isArray(data)
  }

  if (loading || !data) return <div>Loading...</div>

  if (error) return <div>Error...</div>

  if (!dataIsArray(data)) {
    return <div>Wrong data type</div>
  }

  return <ItemsWrapper>{data?.map(item => <CardItem key={item.id} item={item} />)}</ItemsWrapper>
}

import React, { useEffect, useState } from 'react'
import { ItemsWrapper } from './styles'
import { CardItem } from './CardItem/CardItem'
import ItemServiceInstance from '@/api/ItemsServiceApi'
import { useAsyncFetch } from '@/hooks/useAsyncFetch'

interface ListCardProps {}

export const ListCard: React.FC<ListCardProps> = () => {
  const { data, loading, error, fetchItems } = useAsyncFetch(ItemServiceInstance)

  useEffect(() => {
    fetchItems()
  }, [])

  if (loading) return <div>Loading...</div>

  if (error) return <div>Error...</div>

  return (
    <ItemsWrapper>
      {data.map(item => (
        <CardItem key={item.id} item={item} />
      ))}
    </ItemsWrapper>
  )
}

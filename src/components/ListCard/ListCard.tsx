import React, { useEffect, useState } from 'react'
import { ItemsWrapper } from './styles'
import { CardItem } from './CardItem/CardItem'
import AppItemsAPI from '@/api/appItemsApiWithClass'

interface ListCardProps {}

const mockedItems: Item[] = [
  {
    id: 1,
    name: 'wardrobe',
    color: 'brown',
    price: 540,
    spareParts: [],
    image: '',
  },
  {
    id: 2,
    name: 'table',
    color: 'black',
    price: 360,
    spareParts: [],
    image: '',
  },
  {
    id: 3,
    name: 'chair',
    color: 'white',
    price: 120,
    spareParts: [],
    image: '',
  },
]

export const ListCard: React.FC<ListCardProps> = () => {
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchItems() {
      try {
        const fetchedItems = await AppItemsAPI.getAllItems()
        setItems(fetchedItems)
      } catch (error) {
        console.error('Failed to fetch items:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <ItemsWrapper>
      {items.map(item => (
        <CardItem key={item.id} item={item} />
      ))}
    </ItemsWrapper>
  )
}

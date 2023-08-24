import React from 'react'
import { ItemsWrapper } from './styles'
import { CardItem } from './CardItem/CardItem'

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
  return (
    <ItemsWrapper>
      {mockedItems.map(item => (
        <CardItem key={item.id} item={item} />
      ))}
    </ItemsWrapper>
  )
}

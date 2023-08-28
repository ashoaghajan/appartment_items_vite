import React from 'react'
import { BaseContainer } from '@/containers/BaseContainer'
import { ListCard } from '@/components/ListCard/ListCard'

interface ListingPageProps {}

export const ListingPage: React.FC<ListingPageProps> = () => {
  return (
    <BaseContainer>
      <ListCard />
    </BaseContainer>
  )
}

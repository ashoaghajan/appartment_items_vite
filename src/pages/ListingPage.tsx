import React from 'react'
import { Heading2 } from '../components/core/typography'
import { BaseContainer } from '../containers/BaseContainer'

interface ListingPageProps {}

export const ListingPage: React.FC<ListingPageProps> = () => {
  return (
    <BaseContainer>
      <Heading2>listing</Heading2>
    </BaseContainer>
  )
}

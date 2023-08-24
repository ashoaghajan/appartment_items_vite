import React from 'react'
import { StyledH2 } from '../components/core/typography'
import { BaseContainer } from '../containers/BaseContainer'

interface DetailsPageProps {}

export const DetailsPage: React.FC<DetailsPageProps> = () => {
  return (
    <BaseContainer>
      <StyledH2>details</StyledH2>
    </BaseContainer>
  )
}

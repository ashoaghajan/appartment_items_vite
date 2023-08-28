import { BaseContainer } from '@/containers/BaseContainer'
import { Heading2 } from '@/components/core/typography'
import React from 'react'

interface CreatePageProps {}

export const CreatePage: React.FC<CreatePageProps> = () => {
  return (
    <BaseContainer>
      <Heading2>create</Heading2>
    </BaseContainer>
  )
}

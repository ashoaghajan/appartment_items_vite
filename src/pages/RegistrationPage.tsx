import React from 'react'
import { Heading2 } from '@/components/core/typography'
import { BaseContainer } from '@/containers/BaseContainer'
import { RegistrationForm } from '@/components/Registration/RegistrationForm'

interface RegistrationPageProps {}

export const RegistrationPage: React.FC<RegistrationPageProps> = () => {
  return (
    <BaseContainer>
      <Heading2>registration</Heading2>
      <RegistrationForm />
    </BaseContainer>
  )
}

import React from 'react'
import { StyledH2 } from '../components/core/typography'
import { BaseContainer } from '../containers/BaseContainer'
import { RegistrationForm } from '../components/Registration/RegistrationForm'

interface RegistrationPageProps {}

export const RegistrationPage: React.FC<RegistrationPageProps> = () => {
  return (
    <BaseContainer>
      <StyledH2>registration</StyledH2>
      <RegistrationForm />
    </BaseContainer>
  )
}

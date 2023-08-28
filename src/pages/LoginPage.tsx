import React from 'react'
import { Heading2 } from '../components/core/typography'
import { BaseContainer } from '../containers/BaseContainer'
import { LoginForm } from '../components/Login/LoginForm'

interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <BaseContainer>
      <LoginForm />
      <Heading2>log in</Heading2>
    </BaseContainer>
  )
}

import React from 'react'
import { StyledButton, StyledForm, StyledInput } from '@core/styledComponents'
import { RegisterButtonWrapper } from './styles'

interface RegistrationFormProps {}

export const RegistrationForm: React.FC<RegistrationFormProps> = () => {
  return (
    <StyledForm>
      <StyledInput type="text" placeholder="username" />
      <StyledInput type="text" placeholder="email" />
      <StyledInput type="password" placeholder="password" />
      <StyledInput type="password" placeholder="Comfirm password" />
      <RegisterButtonWrapper>
        <StyledButton>submit</StyledButton>
      </RegisterButtonWrapper>
    </StyledForm>
  )
}

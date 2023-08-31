import React, { PropsWithChildren } from 'react'
import { styled } from 'styled-components'

const StyledContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const BaseContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

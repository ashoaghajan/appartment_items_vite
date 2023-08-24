import React, { ReactNode } from 'react'
import { styled } from 'styled-components'

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

interface BaseContainerProps {
  children: ReactNode
}

export const BaseContainer: React.FC<BaseContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

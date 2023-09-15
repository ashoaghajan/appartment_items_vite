import { device } from '@/constants/consts'
import { pxToRem } from '@/utils/styleHelpers'
import React, { PropsWithChildren } from 'react'
import { styled } from 'styled-components'

const StyledContainer = styled.main`
  width: 100%;
  min-height: calc(100vh - ${pxToRem(10)});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: ${pxToRem(10)};

  @media ${device.tablet} {
    margin-top: ${pxToRem(20)};
    min-height: calc(100vh - ${pxToRem(20)});
  }
`

export const BaseContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

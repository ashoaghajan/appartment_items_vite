import { device } from '@/constants/consts'
import { pxToRem } from '@/utils/styleHelpers'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Spinner = styled.div`
  border: ${pxToRem(16)} solid #f3f3f3;
  border-top: ${pxToRem(16)} solid #3498db;
  border-radius: 50%;
  width: ${pxToRem(75)};
  height: ${pxToRem(75)};
  animation: ${spin} 2s linear infinite;
  transform: translate(-50%, -50%);

  @media ${device.tablet} {
    width: ${pxToRem(100)};
    height: ${pxToRem(100)};
  }
`

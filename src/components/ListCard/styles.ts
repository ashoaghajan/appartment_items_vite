import { styled } from 'styled-components'
import { pxToRem } from '@utils/styleHelpers'
import { device } from '@/constants/consts'

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
  margin-top: ${pxToRem(20)};

  @media ${device.tablet} {
    width: ${pxToRem(400)};
    margin-top: ${pxToRem(40)};
  }
`

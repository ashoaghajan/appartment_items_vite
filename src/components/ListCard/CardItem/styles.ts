import { styled } from 'styled-components'
import { pxToRem } from '../../../utils/styleHelpers'
import { device } from '@/constants/consts'

export const CardStyled = styled.div`
  border: ${pxToRem(1)} solid ${({ theme }) => theme.colors.light_gray};
  padding: ${pxToRem(10)};
  margin-bottom: ${pxToRem(10)};
  box-shadow: 0 ${pxToRem(4)} ${pxToRem(8)} ${({ theme }) => theme.colors.light_gray};
  width: 80%;

  @media ${device.tablet} {
    margin-bottom: ${pxToRem(20)};
  }
`

export const CardDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const ColorPriceWrapper = styled.div`
  align-self: flex-start;
`

const imageUrl =
  'https://image.shutterstock.com/image-photo/stylish-room-interior-comfortable-furniture-260nw-1485045323.jpg'

export const MockedImage = styled.div`
  width: ${pxToRem(120)};
  height: ${pxToRem(120)};
  margin: 0 ${pxToRem(20)} 0 ${pxToRem(10)};
  background-image: url(${imageUrl});
  background-size: cover;
  background-position: center;

  @media ${device.tablet} {
    width: ${pxToRem(80)};
    height: ${pxToRem(80)};
    margin: 0 ${pxToRem(40)} 0 ${pxToRem(10)};
  }
`

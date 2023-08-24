import { styled } from 'styled-components'
import { pxToRem } from '../../utils/styleHelpers'

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: ${pxToRem(400)};
`

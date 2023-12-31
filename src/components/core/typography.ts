import { pxToRem } from '@/utils/styleHelpers'
import { styled } from 'styled-components'

export const Heading1 = styled.h1`
  margin: ${pxToRem(10)} 0;
`

export const Heading2 = styled.h2`
  margin: ${pxToRem(10)} 0;
`

export const Heading3 = styled.h3`
  margin: ${pxToRem(5)} 0;
`

export const Typography = styled.p`
  margin: ${pxToRem(3)} 0;
`

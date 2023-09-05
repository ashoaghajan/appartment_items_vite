import { styled } from 'styled-components'
import { ButtonsWrapper } from '../Login/styles'
import { pxToRem } from '@/utils/styleHelpers'
import { GeneralInputProps } from '../core/styledComponents'
import { Typography } from '../core/typography'
import { device } from '@/constants/consts'

export const CreateButtonWrapper = styled(ButtonsWrapper)`
  justify-content: flex-end;
`

export const StyledFileInputWrapper = styled.div`
  ${GeneralInputProps}
  position: relative;
  border: ${pxToRem(1)} solid ${({ theme }) => theme.colors.dark_gray};
  cursor: pointer;
`

export const StyledFileInput = styled.input.attrs({ type: 'file' })`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  cursor: pointer;
`

export const StyledFileLabel = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  pointer-events: none;
`
export const StyledColorSelect = styled.select`
  ${GeneralInputProps}
  width: 100%;
  border: ${pxToRem(1)} solid ${({ theme }) => theme.colors.dark_gray};
  appearance: none;
  background-color: ${({ theme }) => theme.colors.primary_light};
  color: ${({ theme }) => theme.colors.dark_gray};
  &:not(:-internal-list-box) {
    max-height: ${pxToRem(150)};
    overflow-y: auto;
  }
`

export const StyledColorOption = styled.option<{ value: string; textcolor: string }>`
  padding: ${pxToRem(5)};
  background-color: ${({ value }) => value};
  color: ${({ textcolor }) => textcolor || 'black'};
`

export const StyledErrorText = styled(Typography)`
  color: ${({ theme }) => theme.colors.error};
  margin-top: -${pxToRem(15)};

  @media ${device.tablet} {
    margin-top: -${pxToRem(-10)};
  }
`

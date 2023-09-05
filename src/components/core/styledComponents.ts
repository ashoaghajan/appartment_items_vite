import { device } from '@/constants/consts'
import { pxToRem } from '@/utils/styleHelpers'
import { styled } from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${pxToRem(200)};
  width: ${pxToRem(260)};
  padding: ${pxToRem(10)};

  @media ${device.tablet} {
    width: ${pxToRem(220)};
    padding: ${pxToRem(20)};
  }
`

export const GeneralInputProps = `
  width: calc(100% - ${pxToRem(20)});
  border-radius: ${pxToRem(5)};
  margin-bottom: ${pxToRem(15)};
  padding: ${pxToRem(10)};

  @media ${device.tablet} {
    margin-bottom: ${pxToRem(10)};
  }
`

export const StyledInput = styled.input`
  ${GeneralInputProps}
  border: ${pxToRem(1)} solid ${({ theme }) => theme.colors.dark_gray};
`

export const StyledButton = styled.button`
  height: ${pxToRem(32.5)};
  width: 100%;
  max-width: ${pxToRem(125)};
  padding: ${pxToRem(5)} ${pxToRem(10)};
  border: ${pxToRem(1)} solid ${({ theme }) => theme.colors.light_gray};
  border-radius: ${pxToRem(5)};
  background-color: transparent;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:active {
    background-color: ${({ theme }) => theme.colors.light_gray};
    color: ${({ theme }) => theme.colors.primary_light};
  }

  @media ${device.tablet} {
    height: unset;
    width: unset;
    max-width: unset;
    &:hover {
      background-color: ${({ theme }) => theme.colors.light_gray};
      color: ${({ theme }) => theme.colors.primary_light};
    }
  }
`

export const Divider = styled.div`
  height: ${pxToRem(1)};
  background-color: ${({ theme }) => theme.colors.dark_gray};
  margin: ${pxToRem(8)}; 0;
`

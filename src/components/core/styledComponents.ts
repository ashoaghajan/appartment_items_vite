import { mobileMaxWidth } from '@/constants/routes'
import { pxToRem } from '@/utils/styleHelpers'
import { styled } from 'styled-components'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${pxToRem(200)};
  width: ${pxToRem(220)};
  padding: ${pxToRem(20)};

  @media (max-width: ${mobileMaxWidth}) {
    width: ${pxToRem(260)};
    padding: ${pxToRem(10)};
  }
`

export const StyledInput = styled.input`
  width: calc(100% - ${pxToRem(20)});
  border: ${pxToRem(1)} solid ${({ theme }) => theme.colors.dark_gray};
  border-radius: ${pxToRem(5)};
  margin-bottom: ${pxToRem(10)};
  padding: ${pxToRem(10)};

  @media (max-width: ${mobileMaxWidth}) {
    margin-bottom: ${pxToRem(15)};
  }
`

export const StyledButton = styled.button`
  padding: ${pxToRem(5)} ${pxToRem(10)};
  border: ${pxToRem(1)} solid ${({ theme }) => theme.colors.light_gray};
  border-radius: ${pxToRem(5)};
  background-color: transparent;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light_gray};
    color: ${({ theme }) => theme.colors.primary_light};
  }

  @media (max-width: ${mobileMaxWidth}) {
    height: ${pxToRem(32.5)};
    width: 100%;
    max-width: ${pxToRem(125)};
    &:active {
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

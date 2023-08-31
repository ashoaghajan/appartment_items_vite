import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { pxToRem } from '@/utils/styleHelpers'
import { mobileMaxWidth } from '@/constants/routes'

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${pxToRem(50)};

  @media (max-width: ${mobileMaxWidth}) {
    gap: ${pxToRem(20)};
  }
`

export const SocialIconsWrapper = styled.div`
  display: flex;
  gap: ${pxToRem(5)};
  margin-top: ${pxToRem(30)};
  padding: ${pxToRem(5)};
  border: ${pxToRem(1)} solid ${({ theme }) => theme.colors.light_gray};

  @media (max-width: ${mobileMaxWidth}) {
    gap: ${pxToRem(25)};
    padding: ${pxToRem(10)};
    border: ${pxToRem(2)} solid ${({ theme }) => theme.colors.light_gray};
  }
`

export const SocialIcon = styled(FontAwesomeIcon)`
  font-size: ${pxToRem(24)};
  color: ${({ theme }) => theme.colors.light_gray};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary_light};
    background-color: ${({ theme }) => theme.colors.light_gray};
  }

  @media (max-width: ${mobileMaxWidth}) {
    font-size: ${pxToRem(30)};
  }
`

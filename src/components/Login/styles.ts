import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { pxToRem } from '@/utils/styleHelpers'
import { device } from '@/constants/consts'

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${pxToRem(20)};

  @media ${device.tablet} {
    gap: ${pxToRem(50)};
  }
`

export const SocialIconsWrapper = styled.div`
  display: flex;
  margin-top: ${pxToRem(30)};
  gap: ${pxToRem(25)};
  padding: ${pxToRem(10)};
  border: ${pxToRem(2)} solid ${({ theme }) => theme.colors.light_gray};

  @media ${device.tablet} {
    gap: ${pxToRem(5)};
    padding: ${pxToRem(5)};
    border: ${pxToRem(1)} solid ${({ theme }) => theme.colors.light_gray};
  }
`

export const SocialIcon = styled(FontAwesomeIcon)`
  font-size: ${pxToRem(30)};
  color: ${({ theme }) => theme.colors.light_gray};
  cursor: pointer;

  @media ${device.tablet} {
    font-size: ${pxToRem(24)};
    &:hover {
      color: ${({ theme }) => theme.colors.primary_light};
      background-color: ${({ theme }) => theme.colors.light_gray};
    }
  }
`

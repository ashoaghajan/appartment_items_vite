import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { pxToRem } from '@/utils/styleHelpers'

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${pxToRem(50)};
`

export const SocialIconsWrapper = styled.div`
  display: flex;
  gap: ${pxToRem(5)};
  margin-top: ${pxToRem(30)};
  padding: ${pxToRem(5)};
  border: ${pxToRem(1)} solid ${({ theme }) => theme.colors.light_gray};
`

export const SocialIcon = styled(FontAwesomeIcon)`
  font-size: ${pxToRem(24)};
  color: ${({ theme }) => theme.colors.light_gray};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary_light};
    background-color: ${({ theme }) => theme.colors.light_gray};
  }
`

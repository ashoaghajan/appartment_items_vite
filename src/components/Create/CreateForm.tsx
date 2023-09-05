import React from 'react'
import { StyledButton, StyledForm, StyledInput } from '../core/styledComponents'
import {
  CreateButtonWrapper,
  StyledColorOption,
  StyledColorSelect,
  StyledFileInput,
  StyledFileInputWrapper,
  StyledFileLabel,
} from './styles'
import { colors } from '@/constants/consts'

interface CreateFormProps {}

export const CreateForm: React.FC<CreateFormProps> = () => {
  return (
    <StyledForm>
      <StyledInput type="text" placeholder="name" />
      <StyledInput type="text" placeholder="price" />
      <StyledInput type="text" placeholder="spare parts" />
      <StyledFileInputWrapper>
        <StyledFileInput id="image" />
        <StyledFileLabel htmlFor="image">attach image</StyledFileLabel>
      </StyledFileInputWrapper>
      <StyledColorSelect>
        {colors.map(color => (
          <StyledColorOption key={color.value} value={color.value} textcolor={color.textColor}>
            {color.name}
          </StyledColorOption>
        ))}
      </StyledColorSelect>
      <CreateButtonWrapper>
        <StyledButton>create</StyledButton>
      </CreateButtonWrapper>
    </StyledForm>
  )
}

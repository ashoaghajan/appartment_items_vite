import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { StyledButton, StyledForm, StyledInput } from '../core/styledComponents'
import {
  CreateButtonWrapper,
  StyledColorOption,
  StyledColorSelect,
  StyledErrorText,
  StyledFileInput,
  StyledFileInputWrapper,
  StyledFileLabel,
} from './styles'
import { colors } from '@/constants/consts'
import AppItemsAPI from '@/api/appItemsApiWithClass'

interface CreateFormProps {}
interface ErrorState extends Omit<NewItem, 'image'> {
  image: string
}

const initState = {
  name: '',
  price: '',
  spareParts: '',
  image: null,
  color: '',
}

export const CreateForm: React.FC<CreateFormProps> = () => {
  const [formData, setFormData] = useState<NewItem>(initState)
  const [errors, setErrors] = useState<ErrorState>({ ...initState, image: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    if (e.target instanceof HTMLInputElement) {
      const { files } = e.target
      if (files) {
        setFormData(prev => ({ ...prev, [name]: files[0] }))
        return
      }
    }

    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    let valid = true
    let tempErrors = { ...initState, image: '' }

    if (!formData.name.trim()) {
      valid = false
      tempErrors.name = 'Name is required.'
    }

    if (!formData.price.trim()) {
      valid = false
      tempErrors.price = 'Price is required.'
    }

    if (formData.image && !['image/jpeg', 'image/png'].includes(formData.image.type)) {
      valid = false
      tempErrors.image = 'Please select a valid image (JPEG or PNG).'
    }

    if (!formData.color) {
      valid = false
      tempErrors.color = 'Please select a color.'
    }

    setErrors(tempErrors)
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      const spareParts = formData.spareParts.split(',')
      const id = uuidv4()
      const newItem = {
        ...formData,
        spareParts,
        id,
        price: Number(formData.price),
      }
      try {
        await AppItemsAPI.addItem(newItem)
        setFormData(initState)
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      {errors.name && <StyledErrorText className="error">{errors.name}</StyledErrorText>}

      <StyledInput
        type="number"
        name="price"
        placeholder="price"
        value={formData.price}
        onChange={handleInputChange}
      />
      {errors.price && <StyledErrorText className="error">{errors.price}</StyledErrorText>}

      <StyledInput
        type="text"
        name="spareParts"
        placeholder="spare parts"
        value={formData.spareParts}
        onChange={handleInputChange}
      />
      {errors.spareParts && (
        <StyledErrorText className="error">{errors.spareParts}</StyledErrorText>
      )}

      <StyledFileInputWrapper>
        <StyledFileInput id="image" name="image" onChange={handleInputChange} />
        <StyledFileLabel htmlFor="image">attach image</StyledFileLabel>
      </StyledFileInputWrapper>
      {errors.image && <StyledErrorText className="error">{errors.image}</StyledErrorText>}

      <StyledColorSelect name="color" value={formData.color} onChange={handleInputChange}>
        <option value="">Select a color</option>
        {colors.map(color => (
          <StyledColorOption key={color.value} value={color.value} textcolor={color.textColor}>
            {color.name}
          </StyledColorOption>
        ))}
      </StyledColorSelect>
      {errors.color && <StyledErrorText className="error">{errors.color}</StyledErrorText>}

      <CreateButtonWrapper>
        <StyledButton type="submit">create</StyledButton>
      </CreateButtonWrapper>
    </StyledForm>
  )
}

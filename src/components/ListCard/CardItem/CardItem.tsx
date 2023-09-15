import React from 'react'
import { CardDetails, CardStyled, ColorPriceWrapper, MockedImage } from './styles'
import { Heading3, Typography } from '../../core/typography'
import { Divider } from '../../core/styledComponents'
import { Item } from '@/types/dataTypes'

interface CardItemProps {
  item: Item
}

export const CardItem: React.FC<CardItemProps> = ({ item }) => {
  return (
    <CardStyled>
      <Heading3>{item.name}</Heading3>
      <Divider />
      <CardDetails>
        <MockedImage />
        <ColorPriceWrapper>
          <Typography>Color: {item.color}</Typography>
          <Typography>Price: ${item.price}</Typography>
        </ColorPriceWrapper>
      </CardDetails>
    </CardStyled>
  )
}

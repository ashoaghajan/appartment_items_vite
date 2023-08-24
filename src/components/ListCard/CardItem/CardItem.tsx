import React from 'react'
import { CardDetails, CardStyled, ColorPriceWrapper, MockedImage } from './styles'
import { StyledH3, Typography } from '../../core/typography'
import { Divider } from '../../core/styledComponents'

interface CardItemProps {
  item: any
}

export const CardItem: React.FC<CardItemProps> = ({ item }) => {
  return (
    <CardStyled>
      <StyledH3>{item.name}</StyledH3>
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

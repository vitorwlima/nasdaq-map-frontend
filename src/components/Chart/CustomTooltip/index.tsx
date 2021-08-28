import React from 'react'
import * as S from './styles'

type ICustomTooltipProps = {
  active?: boolean
  payload?: any
  xValue?: string
}

export const CustomTooltip = ({ active, payload }: ICustomTooltipProps) => {
  if (!active) {
    return null
  }

  const { time, price } = payload[0].payload

  return <S.Container>${price}</S.Container>
}

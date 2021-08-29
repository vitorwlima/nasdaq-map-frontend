import React, { ReactNode } from 'react'
import * as S from './styles'

type TooltipProps = {
  children: ReactNode
  text: string
}

export const Tooltip = ({ children, text }: TooltipProps) => {
  return (
    <S.Container>
      <div className='tooltip'>{text}</div>
      {children}
    </S.Container>
  )
}

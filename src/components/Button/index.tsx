import React from 'react'

import * as S from './styles'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <S.Container {...rest}>{children}</S.Container>
}

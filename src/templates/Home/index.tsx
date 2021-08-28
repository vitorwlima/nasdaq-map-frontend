import React from 'react'
import { useAppSelector } from '../../hooks'
import * as S from './styles'
import { NavigationMenu } from '../../components'

export const HomeTemplate = () => {
  const user = useAppSelector(state => state.user)!

  return (
    <S.Container>
      <NavigationMenu />
    </S.Container>
  )
}

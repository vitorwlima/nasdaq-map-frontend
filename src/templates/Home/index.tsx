import React from 'react'
import { useAppSelector } from '../../hooks'
import * as S from './styles'
import { Dashboard, NavigationMenu } from '../../components'

export const HomeTemplate = () => {
  const user = useAppSelector(state => state.user)!

  return (
    <S.Container>
      <NavigationMenu />
      <Dashboard />
    </S.Container>
  )
}

import React from 'react'

import * as S from './styles'
import { Dashboard, MainMenu, NavigationMenu } from '../../components'

export const HomeTemplate = () => {
  return (
    <S.Container>
      <NavigationMenu />
      <Dashboard />
      <MainMenu />
    </S.Container>
  )
}

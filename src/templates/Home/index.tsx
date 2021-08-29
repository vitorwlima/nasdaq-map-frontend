import React from 'react'

import * as S from './styles'
import { Dashboard, Loader, MainMenu, NavigationMenu } from '../../components'
import { useAppSelector } from '../../hooks'

export const HomeTemplate = () => {
  const isLoaderOpen = useAppSelector(state => state.loaderReducer.open)

  return (
    <>
      {isLoaderOpen ? (
        <Loader />
      ) : (
        <S.Container>
          <NavigationMenu />
          <Dashboard />
          <MainMenu />
        </S.Container>
      )}
    </>
  )
}

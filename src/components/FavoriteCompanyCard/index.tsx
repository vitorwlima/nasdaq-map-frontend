import React, { useCallback } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'

import * as S from './styles'
import GraphUp from '../../assets/graph-up.svg'
import GraphDown from '../../assets/graph-down.svg'
import TrashIcon from '../../assets/trash.svg'
import api from '../../services/api'
import { useAppDispatch } from '../../hooks'
import { setUser } from '../../state/slices/UserSlice'
import { setOpenMenu } from '../../state/slices/MenuSlice'
import { setLoaderOpen } from '../../state/slices/LoaderSlice'

type IFavoriteCompanyCardProps = {
  symbol: string
  name: string
  profit: number
  logo: string
}

export const FavoriteCompanyCard = ({ symbol, name, profit, logo }: IFavoriteCompanyCardProps) => {
  const isProfitable = profit >= 0
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleRemoveFavorite = useCallback(async () => {
    const { data } = await api.delete(`/favorite-company/${symbol}`)

    if (data) {
      dispatch(setUser(data))
    }
  }, [dispatch, symbol])

  const handleRedirect = useCallback(() => {
    dispatch(setOpenMenu(false))
    dispatch(setLoaderOpen(true))
    router.push(`/dashboard/${symbol}`)
  }, [symbol, router, dispatch])

  return (
    <S.Container>
      <S.Content isProfitable={isProfitable} onClick={handleRedirect}>
        <Image src={logo} width='40' height='40' alt='twitter' />
        <div className='info'>
          <h5>{symbol}</h5>
          <span>{name}</span>
        </div>
        <div className='prices'>
          <span>
            {isProfitable && '+'}
            {profit.toFixed(2)}
          </span>
          <Image src={isProfitable ? GraphUp : GraphDown} width='16' height='16' alt='gráfico' />
        </div>
      </S.Content>
      <div className='trash' onClick={handleRemoveFavorite}>
        <Image src={TrashIcon} width='24' height='24' alt='excluir' />
      </div>
    </S.Container>
  )
}

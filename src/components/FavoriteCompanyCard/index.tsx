import React, { useCallback } from 'react'
import Image from 'next/image'

import * as S from './styles'
import TwitterLogo from '../../assets/companies/twitter.svg'
import GraphUp from '../../assets/graph-up.svg'
import TrashIcon from '../../assets/trash.svg'
import api from '../../services/api'
import { useAppDispatch } from '../../hooks'
import { setUser } from '../../state/slices/UserSlice'

type IFavoriteCompanyCardProps = {
  symbol: string
  name: string
  profit: number
}

export const FavoriteCompanyCard = ({ symbol, name, profit }: IFavoriteCompanyCardProps) => {
  const isProfitable = profit >= 0
  const dispatch = useAppDispatch()

  const handleRemoveFavorite = useCallback(async () => {
    const { data } = await api.delete(`/favorite-company/${symbol}`)

    if (data) {
      dispatch(setUser(data))
    }
  }, [dispatch, symbol])

  return (
    <S.Container>
      <S.Content isProfitable={isProfitable}>
        <Image src={TwitterLogo} width='40' height='40' alt='twitter' />
        <div className='info'>
          <h5>{symbol}</h5>
          <span>{name}</span>
        </div>
        <div className='prices'>
          <span>
            {isProfitable ? '+' : '-'}
            {profit.toFixed(2)}
          </span>
          <Image src={GraphUp} width='16' height='16' alt='gráfico' />
        </div>
      </S.Content>
      <div className='trash' onClick={handleRemoveFavorite}>
        <Image src={TrashIcon} width='24' height='24' alt='excluir' />
      </div>
    </S.Container>
  )
}

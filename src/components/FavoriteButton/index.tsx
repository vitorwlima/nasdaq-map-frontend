import React, { useCallback } from 'react'
import Image from 'next/image'

import * as S from './styles'
import StarIcon from '../../assets/star.svg'
import FilledStarIcon from '../../assets/filled-star.svg'
import { useAppDispatch, useAppSelector } from '../../hooks'
import api from '../../services/api'
import { setUser } from '../../state/slices/UserSlice'

type IFavoriteButtonProps = {
  quote: string
}

export const FavoriteButton = ({ quote }: IFavoriteButtonProps) => {
  const user = useAppSelector(state => state.userReducer.user)!
  const dispatch = useAppDispatch()

  const isFavorite = user.favoriteCompanies.includes(quote)

  const handleClick = useCallback(async () => {
    if (isFavorite) {
      const { data } = await api.delete(`/favorite-company/${quote}`)
      return dispatch(setUser(data))
    }

    const { data } = await api.post('/favorite-company', { quote })
    dispatch(setUser(data))
  }, [dispatch, isFavorite, quote])

  return (
    <S.Container onClick={handleClick}>
      <Image
        src={isFavorite ? FilledStarIcon : StarIcon}
        width='30'
        height='30'
        alt={isFavorite ? 'estrela preenchida' : 'estrela vazia'}
      />
    </S.Container>
  )
}

import React, { useCallback } from 'react'
import Image from 'next/image'

import * as S from './styles'
import StarIcon from '../../assets/star.svg'
import FilledStarIcon from '../../assets/filled-star.svg'
import { useAppDispatch, useAppSelector } from '../../hooks'
import api from '../../services/api'
import { setUser } from '../../state/slices/UserSlice'
import { Tooltip } from '../Tooltip'

type IFavoriteButtonProps = {
  quote: string
}

export const FavoriteButton = ({ quote }: IFavoriteButtonProps) => {
  const user = useAppSelector(state => state.userReducer.user)!
  const dispatch = useAppDispatch()

  const isFavorite = user.favoriteCompanies.includes(quote)

  const handleClick = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.stopPropagation()
      if (isFavorite) {
        const { data } = await api.delete(`/favorite-company/${quote}`)
        if (data) {
          return dispatch(setUser(data))
        }
      }

      const { data } = await api.post('/favorite-company', { quote })
      if (data) {
        dispatch(setUser(data))
      }
    },
    [dispatch, isFavorite, quote]
  )

  return (
    <Tooltip text={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}>
      <S.Container onClick={handleClick}>
        <Image
          src={isFavorite ? FilledStarIcon : StarIcon}
          width='30'
          height='30'
          alt={isFavorite ? 'estrela preenchida' : 'estrela vazia'}
        />
      </S.Container>
    </Tooltip>
  )
}

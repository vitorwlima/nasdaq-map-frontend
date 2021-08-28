import Image from 'next/image'
import React from 'react'
import { FavoriteCompanyCard } from '../FavoriteCompanyCard'
import { UserCard } from '../UserCard'
import * as S from './styles'
import FilledStar from '../../assets/filled-star.svg'

export const MainMenu = () => {
  return (
    <S.Container>
      <UserCard />
      <S.FavoriteCompanies>
        <div className='header'>
          <Image src={FilledStar} width='24' height='24' alt='estrela' />
          <h4>Empresas favoritas</h4>
        </div>
        {[1, 2, 3].map(item => (
          <FavoriteCompanyCard key={item} />
        ))}
      </S.FavoriteCompanies>
    </S.Container>
  )
}

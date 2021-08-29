import Image from 'next/image'
import React from 'react'
import * as S from './styles'
import TwitterLogo from '../../assets/companies/twitter.svg'
import GraphUp from '../../assets/graph-up.svg'
import GraphDown from '../../assets/graph-down.svg'
import { FavoriteButton } from '../FavoriteButton'

type IRecentCompanyCardProps = {
  symbol: string
  name: string
  profit: number
}

export const RecentCompanyCard = ({ symbol, name, profit }: IRecentCompanyCardProps) => {
  const isProfitable = profit >= 0

  return (
    <S.Container isProfitable={isProfitable}>
      <FavoriteButton quote={symbol} />
      <Image src={TwitterLogo} width='40' height='40' alt={name} />
      <div className='info'>
        <h5>{symbol}</h5>
        <span>{name}</span>
      </div>
      <div className='prices'>
        <span>
          {isProfitable ? '+' : '-'}
          {profit.toFixed(2)}
        </span>
        <Image src={isProfitable ? GraphUp : GraphDown} width='16' height='16' alt='gráfico' />
      </div>
    </S.Container>
  )
}

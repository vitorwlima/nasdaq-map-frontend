import React, { useEffect, useCallback, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'

import * as S from './styles'
import GraphUp from '../../assets/graph-up.svg'
import GraphDown from '../../assets/graph-down.svg'
import { FavoriteButton } from '../FavoriteButton'

import AdobeLogo from '../../assets/companies/adobe.svg'
import AmazonLogo from '../../assets/companies/amazon.svg'
import AppleLogo from '../../assets/companies/apple.svg'
import FacebookLogo from '../../assets/companies/facebook.svg'
import MicrosoftLogo from '../../assets/companies/microsoft.svg'
import StarbucksLogo from '../../assets/companies/starbucks.svg'
import TwitterLogo from '../../assets/companies/twitter.svg'

type IRecentCompanyCardProps = {
  symbol: string
  name: string
  profit: number
  logo: string
}

export const RecentCompanyCard = ({ symbol, name, profit, logo }: IRecentCompanyCardProps) => {
  const isProfitable = profit >= 0
  const router = useRouter()
  const [useLogo, setLogo] = useState(logo)

  useEffect(() => {
    if (symbol === 'ADBE') {
      setLogo(AdobeLogo)
    }

    if (symbol === 'AMZN') {
      setLogo(AmazonLogo)
    }

    if (symbol === 'AAPL') {
      setLogo(AppleLogo)
    }

    if (symbol === 'FB') {
      setLogo(FacebookLogo)
    }

    if (symbol === 'MSFT') {
      setLogo(MicrosoftLogo)
    }

    if (symbol === 'SBUX') {
      setLogo(StarbucksLogo)
    }

    if (symbol === 'TWTR') {
      setLogo(TwitterLogo)
    }
  }, [symbol])

  const handleRedirect = useCallback(() => {
    router.push(`/dashboard/${symbol}`)
  }, [router, symbol])

  return (
    <S.Container isProfitable={isProfitable} onClick={handleRedirect}>
      <FavoriteButton quote={symbol} />
      <Image src={useLogo} width='40' height='40' alt={name} />
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
    </S.Container>
  )
}

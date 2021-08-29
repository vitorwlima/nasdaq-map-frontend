import React from 'react'
import Image from 'next/image'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import theme from '../../styles/theme'
import { CustomTooltip } from './CustomTooltip'
import * as S from './styles'
import GraphDownIcon from '../../assets/graph-down.svg'
import GraphUpIcon from '../../assets/graph-up.svg'
import { useAppSelector } from '../../hooks'
import { FavoriteButton } from '../FavoriteButton'

export const Chart = () => {
  const { intradayQuote, quote } = useAppSelector(state => state.quoteReducer)
  const isProfitable = quote ? quote?.changePercent >= 0 : true

  if (!intradayQuote.length || !quote) {
    return (
      <S.Container noData={true}>
        <h4>Comece buscando por uma empresa para ver sua variação diária!</h4>
      </S.Container>
    )
  }

  return (
    <S.Container>
      <S.Header>
        <S.AssetInfo>
          <FavoriteButton quote={quote.symbol} />
          <div className='info'>
            <h4>{quote.symbol}</h4>
            <span>{quote.companyName}</span>
          </div>
        </S.AssetInfo>
        <S.AssetPrices isProfitable={isProfitable}>
          <div className='top'>
            <Image src={isProfitable ? GraphUpIcon : GraphDownIcon} width='20' height='20' alt='ícone gráfico' />
            <h4>${quote.latestPrice}</h4>
          </div>
          <div className='bottom'>
            ${isProfitable && '+'}
            {quote.change} ({isProfitable && '+'}
            {quote?.changePercent}%)
          </div>
        </S.AssetPrices>
      </S.Header>
      <ResponsiveContainer width='100%' aspect={1.96} maxHeight={360}>
        <AreaChart data={intradayQuote} margin={{ top: 16, right: 12, bottom: 0, left: 12 }}>
          <defs>
            <linearGradient id='gradient' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor={theme.color.primary} stopOpacity={0.3} />
              <stop offset='75%' stopColor={theme.color.primary} stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <Area
            dataKey='close'
            stroke={theme.color.primary}
            fill='url(#gradient)'
            type='monotone'
            strokeWidth={2}
            activeDot={{
              stroke: 'white',
              fill: theme.color.primary,
              r: 10,
              strokeWidth: 4,
            }}
          />

          <XAxis
            dataKey='minute'
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            interval={window.innerWidth > 1024 ? 0 : 100}
            tickFormatter={
              window.innerWidth > 1024
                ? value => {
                    const isDivisibleByHalfHour = +value.split(':')[1] % 30 === 0
                    if (isDivisibleByHalfHour) {
                      return value
                    }

                    return ''
                  }
                : value => value
            }
          />

          <YAxis
            dataKey='close'
            tickLine={false}
            tickCount={6}
            tickFormatter={value => `$${value.toFixed(0)}`}
            axisLine={false}
            tickMargin={10}
          />

          <CartesianGrid stroke={theme.color.gray} opacity={0.1} />

          <Tooltip content={<CustomTooltip />} cursor={false} viewBox={{ y: -10 }} />
        </AreaChart>
      </ResponsiveContainer>
    </S.Container>
  )
}

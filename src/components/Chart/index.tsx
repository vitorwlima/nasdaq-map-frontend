import React from 'react'
import Image from 'next/image'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import theme from '../../styles/theme'
import { CustomTooltip } from './CustomTooltip'
import * as S from './styles'
import StarIcon from '../../assets/star.svg'
import GraphDownIcon from '../../assets/graph-down.svg'

export const Chart = () => {
  const data = [
    {
      time: '09:00',
      price: 400,
    },
    {
      time: '09:30',
      price: 1000,
    },
    {
      time: '10:00',
      price: 408,
    },
    {
      time: '10:30',
      price: 860,
    },
    {
      time: '11:00',
      price: 694,
    },
    {
      time: '11:30',
      price: 512,
    },
    {
      time: '12:00',
      price: 424,
    },
    {
      time: '12:30',
      price: 440,
    },
    {
      time: '13:30',
      price: 740,
    },
    {
      time: '13:30',
      price: 401,
    },
  ]

  return (
    <S.Container>
      <S.Header>
        <S.AssetInfo>
          <Image src={StarIcon} width='30' height='30' alt='Estrela' />
          <div className='info'>
            <h4>MSFT</h4>
            <span>Microsoft</span>
          </div>
        </S.AssetInfo>
        <S.AssetPrices>
          <div className='top'>
            <Image src={GraphDownIcon} width='20' height='20' alt='ícone gráfico' />
            <h4>$265.42</h4>
          </div>
          <div className='bottom'>$-0.09 (-0.03%)</div>
        </S.AssetPrices>
      </S.Header>
      <ResponsiveContainer width='100%' aspect={1.96} maxHeight={360}>
        <AreaChart data={data} margin={{ top: 16, right: 12, bottom: 0, left: 12 }}>
          <defs>
            <linearGradient id='gradient' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor={theme.color.primary} stopOpacity={0.3} />
              <stop offset='75%' stopColor={theme.color.primary} stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <Area
            dataKey='price'
            stroke={theme.color.primary}
            fill='url(#gradient)'
            type='monotone'
            strokeWidth={2}
            dot={{ fill: theme.color.primary, r: 4.5, fillOpacity: 1 }}
            activeDot={{
              stroke: 'white',
              fill: theme.color.primary,
              r: 10,
              strokeWidth: 4,
            }}
          />

          <XAxis dataKey='time' tickLine={false} axisLine={false} tickMargin={10} />

          <YAxis
            dataKey='price'
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

import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import theme from '../../styles/theme'

import * as S from './styles'

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
      <ResponsiveContainer width='100%' height={400}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id='gradient' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor={theme.color.primary} stopOpacity={0.4} />
              <stop offset='75%' stopColor={theme.color.primary} stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <Area dataKey='price' stroke={theme.color.primary} fill='url(#gradient)' />

          <XAxis dataKey='time' tickLine={false} />

          <YAxis dataKey='price' tickLine={false} tickCount={6} tickFormatter={value => `$${value.toFixed(0)}`} />

          <CartesianGrid stroke={theme.color.gray} opacity={0.1} />

          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </S.Container>
  )
}

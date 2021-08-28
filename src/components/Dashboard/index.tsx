import Image from 'next/image'
import React from 'react'
import * as S from './styles'

import DashboardIcon from '../../assets/dashboard.svg'
import SearchIcon from '../../assets/search.svg'
import { Chart, Input } from '../'
import { Form } from '@unform/web'

export const Dashboard = () => {
  return (
    <S.Container>
      <S.Title>
        <Image src={DashboardIcon} width='30' height='30' alt='Dashboard' />
        <h2>Dashboard</h2>
      </S.Title>
      <Form onSubmit={() => console.log('oi')}>
        <Input name='company' placeholder='Buscar empresa' icon={SearchIcon} />
      </Form>
      <Chart />
    </S.Container>
  )
}

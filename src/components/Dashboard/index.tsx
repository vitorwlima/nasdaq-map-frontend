import Image from 'next/image'
import React from 'react'
import * as S from './styles'

import DashboardIcon from '../../assets/dashboard.svg'
import SearchIcon from '../../assets/search.svg'
import { Input } from '../'
import { Form } from '@unform/web'

export const Dashboard = () => {
  return (
    <S.Container>
      <S.Title>
        <Image src={DashboardIcon} width='30' height='30' alt='Dashboard' />
        <h3>Dashboard</h3>
      </S.Title>
      <Form onSubmit={() => console.log('oi')}>
        <Input name='company' placeholder='Buscar empresa' icon={SearchIcon} />
      </Form>
    </S.Container>
  )
}

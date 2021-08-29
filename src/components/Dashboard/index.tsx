import Image from 'next/image'
import React from 'react'
import { Form } from '@unform/web'

import * as S from './styles'
import DashboardIcon from '../../assets/dashboard.svg'
import SearchIcon from '../../assets/search.svg'
import { Chart, Input, RecentCompanies } from '../'
import { useRouter } from 'next/dist/client/router'

type IFormData = {
  company: string
}

export const Dashboard = () => {
  const router = useRouter()

  const handleRedirectCompany = ({ company }: IFormData) => {
    return router.push(`/dashboard/${company}`)
  }

  return (
    <S.Container>
      <S.Title>
        <Image src={DashboardIcon} width='30' height='30' alt='Dashboard' />
        <h2>Dashboard</h2>
      </S.Title>
      <Form onSubmit={handleRedirectCompany}>
        <Input name='company' placeholder='Buscar empresa' icon={SearchIcon} />
      </Form>
      <Chart />
      <RecentCompanies />
    </S.Container>
  )
}

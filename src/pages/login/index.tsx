import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from '../../components/Button'

import * as S from './styles'

const Login: NextPage = () => {
  return (
    <S.Container>
      <Head>
        <title>Nasdaq Map | Login</title>
        <meta name='description' content='Página de login da aplicação Nasdaq Map' />
      </Head>
      <main>
        <Image src='/logo.svg' width='100' height='100' alt='Nasdaq Map' />
        <h1>Bem-vindo(a) de volta ao Nasdaq Map</h1>
        <Button>oi</Button>
      </main>
    </S.Container>
  )
}

export default Login

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Form } from '@unform/web'
import { Button } from '../../components/Button'

import * as S from './styles'
import Input from '../../components/Input'

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
        <Form onSubmit={e => console.log(e)}>
          <Input name='email' placeholder='Endereço de e-mail' />
        </Form>
      </main>
    </S.Container>
  )
}

export default Login

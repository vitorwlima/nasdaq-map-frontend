import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nasdaq Map | Login</title>
        <meta name='description' content='Página de login da aplicação Nasdaq Map' />
      </Head>
      <Image src='/logo.svg' width='100' height='100' alt='Nasdaq Map' />
    </div>
  )
}

export default Login

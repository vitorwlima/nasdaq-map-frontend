import type { NextPage } from 'next'
import { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Form } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'
import * as Yup from 'yup'

import { getValidationErrors } from '../../utils'
import { Button, Input } from '../../components/'
import * as S from './styles'

type IFormData = {
  email: string
  password: string
}

const Login: NextPage = () => {
  const formRef = useRef<FormHandles>(null)

  const handleLogin: SubmitHandler<IFormData> = async formData => {
    try {
      formRef.current!.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string().email('Digite um email válido.').required('Insira o seu email.'),
        password: Yup.string().required('Insira a sua senha.'),
      })

      await schema.validate(formData, { abortEarly: false })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)
      }
    }
  }

  return (
    <S.Container>
      <Head>
        <title>Nasdaq Map | Login</title>
        <meta name='description' content='Página de login da aplicação Nasdaq Map' />
      </Head>
      <Image src='/logo.svg' width='100' height='100' alt='Nasdaq Map' />
      <h1>Bem-vindo(a) de volta ao Nasdaq Map</h1>
      <Form onSubmit={handleLogin} ref={formRef}>
        <Input name='email' placeholder='Endereço de e-mail' />
        <Input name='password' placeholder='Senha' type='password' />
        <Button type='submit' fullWidth>
          Entrar
        </Button>
      </Form>
      <div className='cadastro'>
        Não tem cadastro?{' '}
        <Link href='/cadastro'>
          <a>Cadastre-se</a>
        </Link>
      </div>
    </S.Container>
  )
}

export default Login

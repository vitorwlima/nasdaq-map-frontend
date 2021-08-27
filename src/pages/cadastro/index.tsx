import React, { useRef } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Form } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'
import * as Yup from 'yup'

import * as S from './styles'
import { Button, Input } from '../../components'
import { getValidationErrors } from '../../utils'

type IFormData = {
  name: string
  email: string
  password: string
}

const Register: NextPage = () => {
  const formRef = useRef<FormHandles>(null)

  const handleRegister: SubmitHandler<IFormData> = async formData => {
    try {
      formRef.current!.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required('Insira seu nome'),
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
        <title>Nasdaq Map | Cadastro</title>
        <meta name='description' content='Página de cadastro da aplicação Nasdaq Map' />
      </Head>
      <S.IntroSection>
        <Image src='/logo.svg' width='100' height='100' alt='Nasdaq Map' />
        <h1>Bem-vindo(a) ao Nasdaq Map</h1>
        <p>Faça seu cadastro para ter acesso à melhor plataforma de investimentos</p>
      </S.IntroSection>
      <S.RegisterSection>
        <h3>Insira seus dados:</h3>
        <Form onSubmit={handleRegister} ref={formRef}>
          <Input name='name' placeholder='Nome' />
          <Input name='email' placeholder='Endereço de e-mail' />
          <Input name='password' placeholder='Senha' type='password' />
          <Button type='submit' fullWidth>
            Cadastrar
          </Button>
        </Form>
        <div className='login'>
          Já possui cadastro?{' '}
          <Link href='/login'>
            <a>Entrar</a>
          </Link>
        </div>
      </S.RegisterSection>
    </S.Container>
  )
}

export default Register

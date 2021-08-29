import React, { useCallback } from 'react'
import { useRouter } from 'next/dist/client/router'

import * as S from './styles'
import { Button } from '../../components'

export const NotFoundTemplate = () => {
  const router = useRouter()

  const handleRedirectHome = useCallback(() => {
    router.push('/dashboard')
  }, [router])

  return (
    <S.Container>
      <h1>404</h1>
      <h2>Página não encontrada :(</h2>
      <p>O conteúdo que você está tentando acessar não existe, ou já saiu do ar.</p>
      <Button onClick={handleRedirectHome}>Voltar ao Nasdaq Map</Button>
    </S.Container>
  )
}

import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import api from '../services/api'
import { setUser } from '../state/slices/UserSlice'
import { HomeTemplate } from '../templates'

const Home: NextPage = () => {
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      const authenticateByRefresh = async () => {
        try {
          const { data } = await api.get('/refresh-token')
          dispatch(setUser(data))
        } catch {
          router.push('/login')
        }
      }

      authenticateByRefresh()
    }
  }, [user, dispatch, router])

  return (
    <>
      <Head>
        <title>Nasdaq Map | Dashboard</title>
        <meta name='description' content='Dashboard aplicação Nasdaq Map' />
      </Head>
      {user ? <HomeTemplate /> : <div>carregando...</div>}
    </>
  )
}

export default Home

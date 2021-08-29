import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { IQuote, IIntradayPrices } from '../../interfaces'
import api from '../../services/api'
import iexApi from '../../services/iexApi'
import { setQuoteInfo } from '../../state/slices/QuoteSlice'
import { setUser } from '../../state/slices/UserSlice'
import { HomeTemplate } from '../../templates'

type DashboardProps = {
  quote: IQuote
  intradayQuote: IIntradayPrices
  error: string
}

const Dashboard: NextPage<DashboardProps> = ({ quote, intradayQuote, error }) => {
  const user = useAppSelector(state => state.userReducer.user)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const hasUpdated = useRef<boolean>(false)

  useEffect(() => {
    if (!user) {
      const authenticateByRefresh = async () => {
        try {
          const { data } = await api.get('/refresh-token')
          console.log(data)
          api.defaults.headers['Authorization'] = `Bearer ${data.token}`
          dispatch(setUser(data))
        } catch {
          router.push('/login')
        }
      }

      authenticateByRefresh()
    }
  }, [user, dispatch, router])

  useEffect(() => {
    if (error) {
      console.log(error)
      router.push('/dashboard')
      return
    }

    hasUpdated.current = false
    dispatch(setQuoteInfo({ quote, intradayQuote: intradayQuote.filter(item => item.close !== null) }))
  }, [error, dispatch, quote, intradayQuote, router])

  useEffect(() => {
    if (user && !hasUpdated.current) {
      const registerRecentCompany = async () => {
        const { data } = await api.post('/recent-company', { quote: quote.symbol })
        if (data) {
          dispatch(setUser(data))
          hasUpdated.current = true
        }
      }

      registerRecentCompany()
    }
  }, [dispatch, quote.symbol, user, hasUpdated])

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

export default Dashboard

export const getServerSideProps: GetServerSideProps = async context => {
  const { quote } = context.query
  try {
    const quoteResponse = await iexApi.get(`/stable/stock/${quote}/quote?token=${process.env.NEXT_PUBLIC_API_KEY}`)
    const intradayQuoteResponse = await iexApi.get(
      `/stable/stock/${quote}/intraday-prices?token=${process.env.NEXT_PUBLIC_API_KEY}`
    )
    return {
      props: { quote: quoteResponse.data, intradayQuote: intradayQuoteResponse.data },
    }
  } catch {
    return {
      props: {
        error: 'Sua ação não foi encontrada.',
      },
    }
  }
}

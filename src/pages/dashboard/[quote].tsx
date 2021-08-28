import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import api from '../../services/api'
import iexApi from '../../services/iexApi'
import { setQuoteInfo } from '../../state/slices/QuoteSlice'
import { setUser } from '../../state/slices/UserSlice'
import { HomeTemplate } from '../../templates'

type DashboardProps = {
  quote: any
  intradayQuote: any
}

const Dashboard: NextPage<DashboardProps> = ({ quote, intradayQuote }) => {
  const user = useAppSelector(state => state.userReducer.user)
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

    dispatch(setQuoteInfo({ quote, intradayQuote }))
  }, [user, dispatch, router, quote, intradayQuote])

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

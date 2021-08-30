import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import { ErrorToast, Loader } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { IQuote, IIntradayPrices, IQuoteNews } from '../../interfaces'
import api from '../../services/api'
import iexApi from '../../services/iexApi'
import { setLoaderOpen } from '../../state/slices/LoaderSlice'
import { setQuoteInfo } from '../../state/slices/QuoteSlice'
import { setUser } from '../../state/slices/UserSlice'
import { HomeTemplate } from '../../templates'

type DashboardProps = {
  quote: IQuote
  intradayQuote: IIntradayPrices
  error: string
  quoteNews: IQuoteNews[]
}

const Dashboard: NextPage<DashboardProps> = ({ quote, intradayQuote, error, quoteNews }) => {
  const user = useAppSelector(state => state.userReducer.user)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const hasUpdated = useRef<boolean>(false)

  useEffect(() => {
    dispatch(setLoaderOpen(false))
    if (!user) {
      const authenticateByRefresh = async () => {
        try {
          const { data } = await api.get('/refresh-token')
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
      ErrorToast({ errorMessage: error })
      router.push('/dashboard')
      return
    }

    hasUpdated.current = false
    dispatch(setQuoteInfo({ quote, intradayQuote: intradayQuote.filter(item => item.close !== null), quoteNews }))
  }, [error, dispatch, quote, intradayQuote, router, quoteNews])

  useEffect(() => {
    if (user && !hasUpdated.current && !error) {
      const registerRecentCompany = async () => {
        const { data } = await api.post('/recent-company', { quote: quote.symbol })
        if (data) {
          dispatch(setUser(data))
          hasUpdated.current = true
        }
      }

      registerRecentCompany()
    }
  }, [dispatch, quote, user, hasUpdated, error])

  return (
    <>
      <Head>
        <title>Nasdaq Map | Dashboard</title>
        <meta name='description' content='Dashboard aplicação Nasdaq Map' />
      </Head>
      {user ? <HomeTemplate /> : <Loader />}
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
    const quoteNews = await iexApi(`/stable/stock/${quote}/news/last?token=${process.env.NEXT_PUBLIC_API_KEY}`)
    return {
      props: { quote: quoteResponse.data, intradayQuote: intradayQuoteResponse.data, quoteNews: quoteNews.data },
    }
  } catch {
    return {
      props: {
        error: 'Sua ação não foi encontrada.',
      },
    }
  }
}

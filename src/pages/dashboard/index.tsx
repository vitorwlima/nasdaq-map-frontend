import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect } from 'react'
import { Loader } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { IIntradayPrices } from '../../interfaces'
import api from '../../services/api'
import iexApi from '../../services/iexApi'
import { setQuoteInfo } from '../../state/slices/QuoteSlice'
import { setUser } from '../../state/slices/UserSlice'
import { HomeTemplate } from '../../templates'

const Dashboard: NextPage = () => {
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
          return router.push('/login')
        }
      }

      authenticateByRefresh()
    } else {
      const getQuotes = async () => {
        const quote = user.recentCompanies[0]
        if (quote) {
          const quoteResponse = await iexApi.get(
            `/stable/stock/${quote}/quote?token=${process.env.NEXT_PUBLIC_API_KEY}`
          )
          const intradayQuoteResponse = await iexApi.get<IIntradayPrices>(
            `/stable/stock/${quote}/intraday-prices?token=${process.env.NEXT_PUBLIC_API_KEY}`
          )
          if (intradayQuoteResponse.data && quoteResponse.data) {
            dispatch(
              setQuoteInfo({
                quote: quoteResponse.data,
                intradayQuote: intradayQuoteResponse.data.filter(item => item.close !== null),
              })
            )
          }
        }
      }

      getQuotes()
    }
  }, [user, dispatch, router])

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

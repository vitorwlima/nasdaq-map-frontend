import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

import * as S from './styles'
import { RecentCompanyCard } from '../'
import StatsIcon from '../../assets/stats.svg'
import { useAppSelector } from '../../hooks'
import iexApi from '../../services/iexApi'
import { IQuote } from '../../interfaces'

type ICompany = IQuote & {
  logo: string
}

export const RecentCompanies = () => {
  const [currentCompany, setCurrentCompany] = useState(0)
  const [maxCardsOnScreen, setMaxCardsOnScreen] = useState(2)
  const user = useAppSelector(state => state.userReducer.user)!
  const [recentCompanies, setRecentCompanies] = useState<ICompany[]>([])

  useEffect(() => {
    const getCompanies = async () => {
      const companies: ICompany[] = []
      for (let i = 0; companies.length < user.recentCompanies.length; i++) {
        const { data } = await iexApi.get<IQuote>(
          `/stable/stock/${user.recentCompanies[i]}/quote?token=${process.env.NEXT_PUBLIC_API_KEY}`
        )
        const response = await iexApi.get(
          `/stable/stock/${user.recentCompanies[i]}/logo?token=${process.env.NEXT_PUBLIC_API_KEY}`
        )
        companies.push({ ...data, logo: response.data.url })
      }

      setRecentCompanies([])
      setRecentCompanies(companies)
    }

    getCompanies()
  }, [user.recentCompanies])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 2560) {
        return setMaxCardsOnScreen(6)
      }
      if (window.innerWidth >= 2200) {
        return setMaxCardsOnScreen(5)
      }
      if (window.innerWidth >= 1860) {
        return setMaxCardsOnScreen(4)
      }
      if (window.innerWidth >= 1500) {
        return setMaxCardsOnScreen(3)
      }
      if (window.innerWidth >= 1160) {
        return setMaxCardsOnScreen(2)
      }
      return setMaxCardsOnScreen(1)
    }

    onResize()

    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const handlePreviousCompany = () => {
    if (currentCompany === 0) {
      return
    }

    setCurrentCompany(prev => prev - 1)
  }

  const handleNextCompany = () => {
    if (currentCompany === user.recentCompanies.length - maxCardsOnScreen) {
      return
    }

    setCurrentCompany(prev => prev + 1)
  }

  return (
    <S.Container>
      <S.Header>
        <div className='intro'>
          <Image src={StatsIcon} width='20' height='20' alt='estatística' />
          <h4>Empresas recentes</h4>
        </div>
        <div className='arrows'>
          <FaChevronLeft onClick={handlePreviousCompany} />
          <FaChevronRight onClick={handleNextCompany} />
        </div>
      </S.Header>
      <S.Carousel currentCompany={currentCompany}>
        {recentCompanies.length ? (
          recentCompanies.map(company => (
            <RecentCompanyCard
              key={company.symbol}
              symbol={company.symbol}
              name={company.companyName}
              profit={company.changePercent}
              logo={company.logo}
            />
          ))
        ) : (
          <p>Nenhuma empresa recente.</p>
        )}
      </S.Carousel>
    </S.Container>
  )
}

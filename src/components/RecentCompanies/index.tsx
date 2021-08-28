import React, { useState } from 'react'
import { RecentCompanyCard } from '../'
import * as S from './styles'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import StatsIcon from '../../assets/stats.svg'
import Image from 'next/image'
import { useEffect } from 'react'

export const RecentCompanies = () => {
  const [currentCompany, setCurrentCompany] = useState(0)
  const [maxCardsOnScreen, setMaxCardsOnScreen] = useState(2)
  const data = [1, 2, 3, 4, 5, 6, 7]

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
    if (currentCompany === data.length - maxCardsOnScreen) {
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
        {data.map(company => (
          <RecentCompanyCard key={company} />
        ))}
      </S.Carousel>
    </S.Container>
  )
}

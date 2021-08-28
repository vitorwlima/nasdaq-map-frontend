import React, { useState } from 'react'
import { RecentCompanyCard } from '../'
import * as S from './styles'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import StatsIcon from '../../assets/stats.svg'
import Image from 'next/image'

export const RecentCompanies = () => {
  const [currentCompany, setCurrentCompany] = useState(0)
  const data = [1, 2, 3, 4, 5, 6, 7]

  const handlePreviousCompany = () => {
    if (currentCompany === 0) {
      return
    }

    setCurrentCompany(prev => prev - 1)
  }

  const handleNextCompany = () => {
    if (currentCompany === data.length - 2) {
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

import Image from 'next/image'
import React from 'react'
import * as S from './styles'
import TwitterLogo from '../../assets/companies/twitter.svg'
import GraphUp from '../../assets/graph-up.svg'
import StarIcon from '../../assets/star.svg'

export const RecentCompanyCard = () => {
  return (
    <S.Container>
      <Image src={StarIcon} width='30' height='30' alt='Estrela' />
      <Image src={TwitterLogo} width='40' height='40' alt='twitter' />
      <div className='info'>
        <h5>TWTR</h5>
        <span>Twitter</span>
      </div>
      <div className='prices'>
        <span>+15.6%</span>
        <Image src={GraphUp} width='16' height='16' alt='gráfico' />
      </div>
    </S.Container>
  )
}

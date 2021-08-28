import Image from 'next/image'
import React from 'react'
import * as S from './styles'
import TwitterLogo from '../../assets/companies/twitter.svg'
import GraphUp from '../../assets/graph-up.svg'
import TrashIcon from '../../assets/trash.svg'

export const FavoriteCompanyCard = () => {
  return (
    <S.Container>
      <S.Content>
        <Image src={TwitterLogo} width='40' height='40' alt='twitter' />
        <div className='info'>
          <h5>TWTR</h5>
          <span>Twitter</span>
        </div>
        <div className='prices'>
          <span>+15.6%</span>
          <Image src={GraphUp} width='16' height='16' alt='gráfico' />
        </div>
      </S.Content>
      <div className='trash' onClick={() => console.log('excluiu')}>
        <Image src={TrashIcon} width='24' height='24' alt='excluir' />
      </div>
    </S.Container>
  )
}

import Image from 'next/image'
import React from 'react'
import { useAppSelector } from '../../hooks'
import * as S from './styles'

export const News = () => {
  const news = useAppSelector(state => state.quoteReducer.quoteNews)

  return (
    <S.Container>
      <h4>Notícias recentes</h4>
      {news.map(quoteNews => {
        const date = new Date(1630350790000)

        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()
        const hour = date.getHours()
        const minute = date.getMinutes()

        return (
          <S.NewsCard key={quoteNews.headline}>
            <header>
              <Image src={quoteNews.image} width='30' height='30' alt={quoteNews.headline} />
              <h5>{quoteNews.headline}</h5>
            </header>
            <p>{quoteNews.summary}</p>
            <div>{quoteNews.source}</div>
            <div>
              {day}/{month}/{year} às {hour}:{minute}
            </div>
          </S.NewsCard>
        )
      })}
    </S.Container>
  )
}

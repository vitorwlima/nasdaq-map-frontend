import React, { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'

import * as S from './styles'
import { FavoriteCompanyCard, UserCard } from '../'
import FilledStar from '../../assets/filled-star.svg'
import HomeIcon from '../../assets/home.svg'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setOpenMenu } from '../../state/slices/MenuSlice'
import { IQuote } from '../../interfaces'
import iexApi from '../../services/iexApi'

import AdobeLogo from '../../assets/companies/adobe.svg'
import AmazonLogo from '../../assets/companies/amazon.svg'
import AppleLogo from '../../assets/companies/apple.svg'
import FacebookLogo from '../../assets/companies/facebook.svg'
import MicrosoftLogo from '../../assets/companies/microsoft.svg'
import StarbucksLogo from '../../assets/companies/starbucks.svg'
import TwitterLogo from '../../assets/companies/twitter.svg'

type ICompany = IQuote & {
  logo: string
}

export const MainMenu = () => {
  const isMenuOpen = useAppSelector(state => state.menuReducer.open)
  const user = useAppSelector(state => state.userReducer.user)!
  const dispatch = useAppDispatch()

  const [favoriteCompanies, setFavoriteCompanies] = useState<ICompany[]>([])

  useEffect(() => {
    const getCompanies = async () => {
      const companies: ICompany[] = []
      for (let i = 0; companies.length < user.favoriteCompanies.length; i++) {
        let logo

        if (user.favoriteCompanies[i] === 'ADBE') {
          logo = AdobeLogo
        }

        if (user.favoriteCompanies[i] === 'AMZN') {
          logo = AmazonLogo
        }

        if (user.favoriteCompanies[i] === 'AAPL') {
          logo = AppleLogo
        }

        if (user.favoriteCompanies[i] === 'FB') {
          logo = FacebookLogo
        }

        if (user.favoriteCompanies[i] === 'MSFT') {
          logo = MicrosoftLogo
        }

        if (user.favoriteCompanies[i] === 'SBUX') {
          logo = StarbucksLogo
        }

        if (user.favoriteCompanies[i] === 'TWTR') {
          logo = TwitterLogo
        }

        const { data } = await iexApi.get<IQuote>(
          `/stable/stock/${user.favoriteCompanies[i]}/quote?token=${process.env.NEXT_PUBLIC_API_KEY}`
        )

        if (!logo) {
          const response = await iexApi.get(
            `/stable/stock/${user.favoriteCompanies[i]}/logo?token=${process.env.NEXT_PUBLIC_API_KEY}`
          )
          logo = response.data.url
        }

        companies.push({ ...data, logo })
      }

      setFavoriteCompanies([])
      setFavoriteCompanies(companies)
    }

    getCompanies()
  }, [user.favoriteCompanies])

  const navigationItems = [
    {
      name: 'Dashboard',
      icon: HomeIcon,
      path: '/dashboard',
    },
  ]

  const handleCloseMenu = useCallback(() => {
    dispatch(setOpenMenu(false))
  }, [dispatch])

  return (
    <S.Container open={isMenuOpen}>
      <header>
        <S.CloseMenu onClick={handleCloseMenu}>
          <FaTimes />
        </S.CloseMenu>
        <Image src='/logo.svg' width='60' height='60' alt='Nasdaq Map' />
      </header>
      <S.NavigationItems>
        {navigationItems.map(navItem => (
          <Link key={navItem.path} href={navItem.path}>
            <a>
              <S.NavigationItem isActive={window.location.pathname.includes(navItem.path)}>
                <Image src={navItem.icon} width='40' height='40' alt={navItem.name} />
                <h3>{navItem.name}</h3>
                <div className='active-label'></div>
              </S.NavigationItem>
            </a>
          </Link>
        ))}
      </S.NavigationItems>
      <UserCard />
      <S.FavoriteCompanies>
        <div className='header'>
          <Image src={FilledStar} width='24' height='24' alt='estrela' />
          <h4>Empresas favoritas</h4>
        </div>
        {favoriteCompanies.length ? (
          favoriteCompanies.map(company => (
            <FavoriteCompanyCard
              key={company.symbol}
              symbol={company.symbol}
              name={company.companyName}
              profit={company.changePercent}
              logo={company.logo}
            />
          ))
        ) : (
          <p>Nenhuma empresa favorita adicionada.</p>
        )}
      </S.FavoriteCompanies>
    </S.Container>
  )
}

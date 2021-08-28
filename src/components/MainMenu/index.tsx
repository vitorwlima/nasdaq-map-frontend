import Image from 'next/image'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { FavoriteCompanyCard } from '../FavoriteCompanyCard'
import { UserCard } from '../UserCard'
import * as S from './styles'
import FilledStar from '../../assets/filled-star.svg'
import HomeIcon from '../../assets/home.svg'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { useCallback } from 'react'
import { setOpenMenu } from '../../state/slices/MenuSlice'
import Link from 'next/link'

export const MainMenu = () => {
  const isMenuOpen = useAppSelector(state => state.menuReducer.open)
  const dispatch = useAppDispatch()

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
        {[1, 2, 3].map(item => (
          <FavoriteCompanyCard key={item} />
        ))}
      </S.FavoriteCompanies>
    </S.Container>
  )
}

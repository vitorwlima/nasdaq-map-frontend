import Image from 'next/image'
import React, { useCallback } from 'react'
import { FaBars } from 'react-icons/fa'
import * as S from './styles'

import HomeIcon from '../../assets/home.svg'
import Link from 'next/link'
import { useAppDispatch } from '../../hooks'
import { setOpenMenu } from '../../state/slices/MenuSlice'

export const NavigationMenu = () => {
  const dispatch = useAppDispatch()

  const navigationItems = [
    {
      name: 'Dashboard',
      icon: HomeIcon,
      path: '/',
    },
  ]

  const handleOpenMenu = useCallback(() => {
    dispatch(setOpenMenu(true))
  }, [dispatch])

  return (
    <S.Container>
      <S.MobileMenu onClick={handleOpenMenu}>
        <FaBars />
      </S.MobileMenu>
      <Image src='/logo.svg' width='60' height='60' alt='Nasdaq Map' />
      <S.NavigationItems>
        {navigationItems.map(navItem => (
          <Link key={navItem.path} href={navItem.path}>
            <a>
              <S.NavigationItem isActive={navItem.path === window.location.pathname}>
                <Image src={navItem.icon} width='40' height='40' alt={navItem.name} />
                <div className='active-label'></div>
              </S.NavigationItem>
            </a>
          </Link>
        ))}
      </S.NavigationItems>
    </S.Container>
  )
}

import Image from 'next/image'
import React from 'react'
import * as S from './styles'

import DashboardIcon from '../../assets/dashboard.svg'
import Link from 'next/link'

export const NavigationMenu = () => {
  const navigationItems = [
    {
      name: 'Dashboard',
      icon: DashboardIcon,
      path: '/',
    },
  ]

  return (
    <S.Container>
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

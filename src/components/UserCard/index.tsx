import React, { useState } from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../../hooks'
import * as S from './styles'

import UserAvatar from '../../assets/user_avatar.svg'
import ArrowDownIcon from '../../assets/chevron-down.svg'
import Image from 'next/image'
import { useCallback } from 'react'
import api from '../../services/api'
import { setUser } from '../../state/slices/UserSlice'
import { setQuoteInfo } from '../../state/slices/QuoteSlice'

export const UserCard = () => {
  const user = useAppSelector(state => state.userReducer.user)!
  const dispatch = useAppDispatch()
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  const handleSwitchUserMenu = useCallback(() => {
    setIsUserMenuOpen(prev => !prev)
  }, [])

  const handleLogout = useCallback(async () => {
    await api.get('/logout')
    dispatch(setUser({ user: null }))
    dispatch(setQuoteInfo({ quote: null, intradayQuote: [] }))
  }, [dispatch])

  return (
    <>
      <S.Container onClick={handleSwitchUserMenu} isUserMenuOpen={isUserMenuOpen}>
        <Image src={UserAvatar} width='40' height='40' alt={user.name} />
        <div className='username'>{user.name}</div>
        <Image src={ArrowDownIcon} width='16' height='16' alt='seta' />
      </S.Container>
      <S.UserMenu open={isUserMenuOpen}>
        <button className='logout' onClick={handleLogout}>
          <FaSignOutAlt />
          <span>Sair</span>
        </button>
      </S.UserMenu>
    </>
  )
}

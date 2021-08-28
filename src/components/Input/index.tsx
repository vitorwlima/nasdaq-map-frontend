import { useField } from '@unform/core'
import Image from 'next/image'
import { useState, useEffect, useCallback, useRef, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  icon?: any
}

export const Input = ({ name, placeholder, icon, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const { error, registerField, clearError } = useField(name)

  useEffect(() => {
    registerField({
      name,
      ref: inputRef.current,
      path: 'value',
    })
  }, [name, registerField])

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
    clearError()
  }, [clearError])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  return (
    <S.Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      <S.Input onFocus={handleInputFocus} onBlur={handleInputBlur} ref={inputRef} placeholder={placeholder} {...rest} />

      <S.Label>{placeholder}</S.Label>

      {error && <S.Error>{error}</S.Error>}

      {icon && (
        <S.IconWrapper type='submit'>
          <Image src={icon} width='35' height='35' alt='ícone' />
        </S.IconWrapper>
      )}
    </S.Container>
  )
}

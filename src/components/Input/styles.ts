import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

type ContainerProps = {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({ isFocused, isErrored }) => css`
    position: relative;
    width: 100%;
    border: 1px solid ${theme.color.gray};
    border-radius: 8px;
    background: ${theme.color.white};
    transition: border-color margin 0.3s;

    & + div {
      margin-top: ${isErrored ? '24px' : '16px'};
    }

    border-color: ${isFocused && theme.color.black};
    border-color: ${isErrored && theme.color.danger};
  `}
`

export const Label = styled.label`
  pointer-events: none;
  position: absolute;
  top: 15px;
  left: 15px;
  font-weight: 400;
  font-size: 14px;
  color: ${theme.color.gray};
  transition: all 0.3s ease-out;
`

export const Input = styled.input`
  background: transparent;
  border: 0;
  width: 100%;
  padding-left: 16px;
  padding-bottom: 8px;
  padding-top: 24px;
  height: 49px;
  color: ${theme.color.black};
  font-size: 14px;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  -webkit-appearance: none;

  &::placeholder {
    color: transparent;
  }

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    font-size: 12px;
    top: 8px;
  }
`

export const Error = styled.span`
  position: absolute;
  color: ${theme.color.danger};
  top: calc(100% + (${theme.spacing.xsmall} / 2));
  font-size: ${theme.font.size.xsmall};
  left: 0;
`

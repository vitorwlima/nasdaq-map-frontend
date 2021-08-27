import styled from 'styled-components'
import theme from '../../styles/theme'

type ButtonProps = {
  fullWidth?: boolean
}

export const Container = styled.button<ButtonProps>`
  background-color: ${theme.color.primary};
  padding: ${theme.spacing.small} ${theme.spacing.large};
  border-radius: ${theme.radius.pill};
  color: ${theme.color.white};
  width: ${props => props.fullWidth && '100%'};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${theme.color.darkPrimary};
  }
`

import styled from 'styled-components'
import theme from '../../styles/theme'

type ContainerProps = {
  isUserMenuOpen: boolean
}

type UserMenuProps = {
  open: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid ${theme.color.opaquePrimary};
  border-radius: ${theme.radius.pill};
  padding: ${theme.spacing.xxsmall};
  padding-right: ${theme.spacing.xsmall};
  cursor: pointer;

  .username {
    font-weight: ${theme.font.weight.smallBold};
    color: ${theme.color.primary};
    flex: 1;
    margin-left: ${theme.spacing.small};
  }

  > div:last-child {
    transition: transform 0.3s;
    transform: ${props => props.isUserMenuOpen && 'rotate(180deg)'};
  }
`

export const UserMenu = styled.div<UserMenuProps>`
  transition: all 0.3s;
  opacity: ${props => (props.open ? '1' : '0')};
  pointer-events: ${props => (props.open ? 'all' : 'none')};
  margin-bottom: ${props => props.open && theme.spacing.medium};
  padding: ${theme.spacing.small};

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    transition: color 0.3s;
  }

  button.logout {
    color: ${theme.color.danger};

    span {
      margin-left: ${theme.spacing.xsmall};
    }

    &:hover {
      color: ${theme.color.darkDanger};
    }
  }
`

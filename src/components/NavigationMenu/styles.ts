import styled from 'styled-components'
import { deviceMaxWidth } from '../../styles/devices'
import theme from '../../styles/theme'

type NavigationItemProps = {
  isActive: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;
  max-width: 100px;
  width: 100px;
  padding: ${theme.spacing.medium} 0;
  height: 100vh;
  flex: 1;

  @media ${deviceMaxWidth.laptopM} {
    flex-direction: row;
    justify-content: space-between;
    width: unset;
    max-width: none;
    padding: ${theme.spacing.small} ${theme.spacing.medium};
    max-height: 80px;
  }
`

export const NavigationItems = styled.nav`
  margin-top: ${theme.spacing.xlarge};
  width: 100%;
  display: flex;
  flex: column;

  a {
    width: 100%;
  }

  @media ${deviceMaxWidth.laptopM} {
    display: none;
  }
`

export const NavigationItem = styled.div<NavigationItemProps>`
  display: flex;
  justify-content: center;
  position: relative;

  .active-label {
    display: ${props => !props.isActive && 'none'};
    height: 180%;
    width: 12px;
    background-color: ${theme.color.secondary};
    position: absolute;

    left: -6px;
    bottom: calc(50% - 40px);
    border-radius: ${theme.radius.pill};
  }
`

export const MobileMenu = styled.div`
  display: none;

  @media ${deviceMaxWidth.laptopM} {
    display: flex;

    svg {
      height: 2rem;
      width: 2rem;
    }
  }
`

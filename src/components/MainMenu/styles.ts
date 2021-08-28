import styled from 'styled-components'
import { deviceMaxWidth } from '../../styles/devices'
import theme from '../../styles/theme'

type ContainerProps = {
  open: boolean
}

type NavigationItemProps = {
  isActive: boolean
}

export const Container = styled.div<ContainerProps>`
  min-width: 360px;
  padding: ${theme.spacing.medium} ${theme.spacing.small};

  header {
    display: none;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${theme.spacing.xlarge};

    @media ${deviceMaxWidth.laptopM} {
      display: flex;
    }
  }

  @media ${deviceMaxWidth.laptopM} {
    min-width: unset;
    position: absolute;
    inset: 0;
    z-index: 1000;
    background-color: ${theme.color.white};
    transition: transform 0.3s;
    transform: ${props => !props.open && `translateX(-100%)`};
    pointer-events: ${props => !props.open && 'none'};

    display: flex;
    flex-direction: column;
  }
`

export const FavoriteCompanies = styled.div`
  .header {
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacing.large};

    h4 {
      margin-left: ${theme.spacing.xsmall};
    }
  }

  > div {
    margin-bottom: ${theme.spacing.medium};
  }
`

export const CloseMenu = styled.div`
  display: block;

  svg {
    height: 2rem;
    width: 2rem;
  }
`

export const NavigationItems = styled.nav`
  display: none;

  @media ${deviceMaxWidth.laptopM} {
    display: flex;
    flex-direction: column;
    margin-bottom: ${`calc(2 * ${theme.spacing.xlarge})`};
  }
`

export const NavigationItem = styled.div<NavigationItemProps>`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: ${theme.spacing.xsmall};

  h3 {
    margin-left: ${theme.spacing.small};
  }

  .active-label {
    display: ${props => !props.isActive && 'none'};
    height: 180%;
    width: 12px;
    background-color: ${theme.color.secondary};
    position: absolute;

    left: ${`calc(-6px - ${theme.spacing.small})`};
    bottom: calc(50% - 40px);
    border-radius: ${theme.radius.pill};
  }
`

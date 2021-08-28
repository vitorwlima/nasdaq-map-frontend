import styled from 'styled-components'
import theme from '../../styles/theme'

type NavigationItemProps = {
  isActive: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;
  max-width: 120px;
  width: 120px;
  padding: ${theme.spacing.medium} 0;
  height: 100vh;
  flex: 1;
`

export const NavigationItems = styled.nav`
  margin-top: ${theme.spacing.xlarge};
  width: 100%;
  display: flex;
  flex: column;

  a {
    width: 100%;
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

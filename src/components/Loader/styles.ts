import styled from 'styled-components'
import { deviceMaxWidth } from '../../styles/devices'
import theme from '../../styles/theme'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.color.primary};
  display: grid;
  place-items: center;

  div {
    width: 196px;
    height: 196px;
    border: 12px solid ${theme.color.secondary};
    border-top: 12px solid ${theme.color.primary};
    border-left: 12px solid ${theme.color.primary};
    border-radius: 50%;
    animation: spin 1.5s infinite;

    @media ${deviceMaxWidth.laptopM} {
      border-width: 10px;
      width: 144px;
      height: 144px;
    }

    @media ${deviceMaxWidth.tablet} {
      border-width: 9px;
      width: 121px;
      height: 121px;
    }

    @media ${deviceMaxWidth.mobileL} {
      border-width: 8px;
      width: 100px;
      height: 100px;
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

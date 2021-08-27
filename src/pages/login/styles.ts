import styled from 'styled-components'
import { deviceMaxWidth } from '../../styles/devices'
import theme from '../../styles/theme'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 720px;
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;

  h1 {
    margin: ${theme.spacing.xlarge} 0;
    text-align: center;
  }

  button {
    margin-top: ${theme.spacing.medium};
  }

  @media ${deviceMaxWidth.tablet} {
    padding: 0 4%;
  }
`

import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2%;
  text-align: center;

  h1 {
    color: ${theme.color.primary};
    margin-bottom: ${theme.spacing.small};
    font-size: 6rem;
  }

  h2 {
    margin-bottom: ${theme.spacing.xsmall};
  }

  p {
    margin-bottom: ${theme.spacing.small};
  }
`

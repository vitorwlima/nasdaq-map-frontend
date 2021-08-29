import styled from 'styled-components'
import { deviceMaxWidth } from '../../styles/devices'
import theme from '../../styles/theme'

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media ${deviceMaxWidth.tablet} {
    flex-direction: column;
  }
`

export const IntroSection = styled.section`
  width: 50%;
  background-color: ${theme.color.primary};
  color: ${theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2%;

  > div {
    align-self: center;

    img {
      border: 1px solid ${theme.color.black} !important;
      border-radius: 50%;
    }
  }

  h1 {
    margin-top: ${theme.spacing.large};
    margin-bottom: ${theme.spacing.medium};
  }

  @media ${deviceMaxWidth.tablet} {
    width: 100%;
    padding: 4%;
  }
`

export const RegisterSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 12%;

  h3 {
    margin-bottom: ${theme.spacing.large};
  }

  button {
    margin-top: ${theme.spacing.medium};
  }

  .login {
    align-self: center;
    margin-top: ${theme.spacing.large};

    a {
      color: ${theme.color.primary};
    }
  }

  @media ${deviceMaxWidth.laptopL} {
    padding: 0 9%;
  }

  @media ${deviceMaxWidth.laptop} {
    padding: 0 6%;
  }
`

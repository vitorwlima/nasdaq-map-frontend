import { createGlobalStyle } from 'styled-components'
import { deviceMaxWidth } from './devices'
import theme from './theme'

export default createGlobalStyle`
  html {
    font-size: 10px;

    @media ${deviceMaxWidth.tablet} {
      font-size: 9px;
    }
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: ${theme.font.size.medium};
    color: ${theme.color.black};
  }

  h1, h2, h3 {
    font-weight: ${theme.font.weight.bold};
  }

  h1 {
    font-size: ${theme.font.size.xxlarge};
  }

  h2 {
    font-size: ${theme.font.size.xlarge};
  }

  h3 {
    font-size: ${theme.font.size.large};
  }

  h4 {
    font-size: ${theme.font.size.xmedium};
  }

  h5, h6 {
    font-size: ${theme.font.size.medium};
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;  
  }

  button, input, textarea {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
  }
`

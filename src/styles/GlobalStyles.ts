import { createGlobalStyle } from 'styled-components'
import { deviceMaxWidth } from './devices'
import theme from './theme'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');

  html {
    font-size: 10px;

    @media ${deviceMaxWidth.tablet} {
      font-size: 8px;
    }
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: ${theme.font.size.medium};
  }

  h1 {
    font-size: ${theme.font.size.xxlarge};
    font-weight: ${theme.font.weight.bold};
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

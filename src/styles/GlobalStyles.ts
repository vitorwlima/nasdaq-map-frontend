import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');

  html {
    font-size: 10px;
  }

  body {
    padding: 0;
    margin: 0;

    font-family: 'Montserrat', sans-serif;
    font-size: ${theme.font.size.medium};
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;  
  }
`

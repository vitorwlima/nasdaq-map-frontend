import { shade } from 'polished'

const theme = {
  font: {
    size: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '2.0rem',
      xlarge: '2.4rem',
      xxlarge: '3.6rem',
    },

    weight: {
      light: 300,
      regular: 400,
      bold: 700,
    },
  },

  color: {
    primary: '#0047BB',
    darkPrimary: shade(0.2, '#0047BB'),
    secondary: '#F06400',
    black: '#14171A',
    gray: '#657786',
    lightGray: '#F5F8FA',
    white: '#FFFFFF',
    success: '#79C300',
    danger: '#D64B45',
  },
}

export default theme

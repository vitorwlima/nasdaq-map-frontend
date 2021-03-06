import { shade, transparentize } from 'polished'

const theme = {
  font: {
    size: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      xmedium: '1.8rem',
      large: '2.0rem',
      xlarge: '2.4rem',
      xxlarge: '3.6rem',
    },

    weight: {
      light: 300,
      regular: 400,
      smallBold: 600,
      bold: 700,
    },
  },

  color: {
    primary: '#0047BB',
    darkPrimary: shade(0.2, '#0047BB'),
    opaquePrimary: transparentize(0.5, '#0047BB'),
    secondary: '#F06400',
    darkSecondary: shade(0.2, '#F06400'),
    black: '#14171A',
    gray: '#657786',
    lightGray: '#F5F8FA',
    white: '#FFFFFF',
    success: '#79C300',
    danger: '#D64B45',
    darkDanger: shade(0.2, '#D64B45'),
  },

  spacing: {
    xxsmall: '0.4rem',
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.6rem',
    xlarge: '4.8rem',
  },

  radius: {
    small: '0.4em',
    medium: '0.8em',
    large: '1.6em',
    pill: '999px',
  },
}

export default theme

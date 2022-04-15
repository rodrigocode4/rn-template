import { ThemeColors } from './types'

export const palette: ThemeColors = {
  primary: {
    main: '#F62742',
    dark: '#B81D31',
    contrastText: {
      main: '#FFFDFD'
    }
  },
  secondary: {
    main: '#FFFFFF',
    contrastText: {
      main: '#000000',
      light: '#4D4D4D'
    }
  },
  info: {
    main: '#F5F6F8',
    contrastText: {
      main: '#6D6D6E',
      light: '#000'
    }
  },
  neutral: {
    main: '#FFF',
    contrastText: {
      main: '#AAAAAA',
      light: '#DDDDDD',
      dark: '#707070'
    }
  },
  common: {
    black: '#000',
    white: '#FFF'
  },
  error: {
    main: '#FFF',
    contrastText: {
      main: '#F00'
    }
  },
  warning: {
    main: '#FFFFDD',
    contrastText: {
      main: '#000000'
    }
  },
  success: {
    main: '#FFF',
    contrastText: {
      main: '#13BF6D'
    }
  }
} as const

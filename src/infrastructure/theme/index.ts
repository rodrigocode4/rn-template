import { createTheme } from './styles'
import { createTypography } from './typography'
import { palette } from './palette'

declare module './types' {
  interface ThemeColorsBase {
    neutral?: PaletteColor
  }
}

const createAppTheme = () => {
  const fontDefault = 'WorkSans-SemiBold'
  return createTheme({
    palette,
    typography: createTypography({
      h1: 3.4,
      fonts: {
        h1: fontDefault,
        h2: fontDefault,
        h3: fontDefault,
        h4: fontDefault,
        h5: fontDefault,
        h6: fontDefault,
        paragraph: fontDefault
      }
    })
  })
}

export { createAppTheme }

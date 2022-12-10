import {
  ImageStyle,
  PixelRatio,
  StyleProp,
  TextStyle,
  ViewStyle
} from 'react-native'
import { normalize } from './normalize'
import {
  Fonts,
  PaletteColor,
  Palettes,
  ThemeColor,
  ThemeColorBase,
  ThemeColors,
  ThemePaletteColorBase,
  ThemeTypographyFonts,
  ThemeTypographies
} from './types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const removeEmpty = (obj: any) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined) {
      delete obj[key]
    }
  })
  return obj
}

export const styleWithoutUndefined = <T>(
  styleObj: StyleProp<ViewStyle | TextStyle | ImageStyle>
): T => {
  return removeEmpty(styleObj)
}

const FRONT_SIZE = 12
const typographyRem = (n = 1) => {
  const result = Math.round(
    PixelRatio.roundToNearestPixel(normalize(FRONT_SIZE * n))
  )
  return result - 2
}

const isPaletteColor = (palette?: Palettes): palette is PaletteColor => {
  return !!(palette as PaletteColor)?.main
}

function getPaletteColor(palette: ThemeColors, color: ThemeColor) {
  const somePalette = palette[color]
  if (!isPaletteColor(somePalette)) {
    return undefined
  }
  return somePalette
}

const getFontSize = (
  typographies: ThemeTypographies,
  variant: ThemeTypographyFonts
) => {
  return typographies[variant]
}

const getFontFamily = (
  typographies: ThemeTypographies,
  variant: ThemeTypographyFonts
) => {
  return typographies.fonts[variant]
}

const getContrastText = (
  palette: ThemeColors,
  color: ThemeColorBase,
  colorKey: ThemePaletteColorBase = 'main'
) => {
  const paletteColor = getPaletteColor(palette, color)
  if (!paletteColor) {
    return
  }
  const finalColor = paletteColor.contrastText[colorKey]
  if (!finalColor) {
    return paletteColor.contrastText.main
  }
  return finalColor
}

const getTextStyles = (
  typographies: ThemeTypographies,
  variant: ThemeTypographyFonts,
  palette: ThemeColors,
  color: ThemeColorBase,
  colorKey: ThemePaletteColorBase
): TextStyle => {
  return styleWithoutUndefined({
    color: getContrastText(palette, color, colorKey),
    fontSize: getFontSize(typographies, variant),
    fontFamily: getFontFamily(typographies, variant)
  })
}

const fonts: Partial<Fonts> = {}

const createTypography = (
  typographyParam: Partial<ThemeTypographies> = {}
): ThemeTypographies => {
  const remFn = typographyParam.remFn ?? typographyRem
  return {
    remFn,
    h1: remFn(typographyParam.h1 ?? 2.8),
    h2: remFn(typographyParam.h2 ?? 2.4),
    h3: remFn(typographyParam.h3 ?? 2.0),
    h4: remFn(typographyParam.h4 ?? 1.8),
    h5: remFn(typographyParam.h5 ?? 1.6),
    h6: remFn(typographyParam.h6 ?? 1.4),
    paragraph: remFn(typographyParam.paragraph ?? 1.0),
    fonts: {
      ...fonts,
      ...typographyParam.fonts
    }
  }
}

export { createTypography, getTextStyles }

/* eslint-disable no-unused-vars */
export interface BasePaletteColor {
    light?: string
    main: string
    dark?: string
}

export type PaletteColor = BasePaletteColor & {
    contrastText: BasePaletteColor
}

export interface ThemeColorsBase {
    primary: PaletteColor
    secondary: PaletteColor
    info?: PaletteColor
    error?: PaletteColor
    warning?: PaletteColor
    success?: PaletteColor
}

interface CommonPaletteColor {
    black: string
    white: string
}

export type ThemeColors = ThemeColorsBase & {
    common?: CommonPaletteColor
}

export type SpacingFn = (n?: number) => number

export type ThemeTypographyFontSize = {
    h1: number
    h2: number
    h3: number
    h4: number
    h5: number
    h6: number
    paragraph: number
}

export type Fonts = {
    [variant in keyof ThemeTypographyFontSize]?: string;
}

export type RemFn = (n: number) => number

export type ThemeTypographys = ThemeTypographyFontSize & {
    fonts: Fonts
    remFn?: RemFn
}

export interface Theme {
    spacing: SpacingFn
    palette: ThemeColors
    typography: ThemeTypographys
}

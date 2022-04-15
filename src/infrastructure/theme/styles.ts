/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { useTheme } from './hooks'
import { normalize } from './normalize'

import { Theme } from './types'
import { createTypography } from './typography'

type FnOrStyle<T> =
  | ((theme: Theme, props?: any) => T | StyleSheet.NamedStyles<T>)
  | T
  | StyleSheet.NamedStyles<T>;

type MakeStylesReturn<T> = (propsParams?: any) => StyleSheet.NamedStyles<T>;

const useBuildStyle = (fnOrStyle: FnOrStyle<any>, props?: any) => {
  const theme = useTheme()
  return typeof fnOrStyle === 'function' ? fnOrStyle(theme, props) : fnOrStyle
}

const makeStylesDev = <
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>
>(fnOrStyle: FnOrStyle<T>): MakeStylesReturn<T> => (propsParams?: any) => {
    const style = useBuildStyle(fnOrStyle, propsParams)
    return useMemo(() => StyleSheet.create(style), [style])
  }

const makeStyles = <
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>
>(fnOrStyle: FnOrStyle<T>): MakeStylesReturn<T> => (propsParams?: any) => {
    const finalPropsRef = useRef(propsParams)
    const styleRef = useRef(useBuildStyle(fnOrStyle, finalPropsRef.current))
    return useMemo(() => StyleSheet.create(styleRef.current), [])
  }

const BASE_UNIT = 8
const spacingFn = (n = 1) => normalize(n * BASE_UNIT)

const themeDefault: Theme = {
  palette: {
    primary: {
      main: '#000',
      contrastText: {
        main: '#FFF',
      },
    },
    secondary: {
      main: '#FFF',
      contrastText: {
        main: '#000',
      },
    },
  },
  spacing: spacingFn,
  typography: createTypography(),
}

const createTheme = (partialTheme: Partial<Theme> = themeDefault): Theme => ({
  ...themeDefault,
  ...partialTheme,
  palette: {
    ...themeDefault.palette,
    ...partialTheme.palette,
  },
  typography: {
    ...themeDefault.typography,
    ...partialTheme.typography,
  },
  spacing: partialTheme.spacing ?? themeDefault.spacing,
})

const makeStylesFinal = __DEV__ ? makeStylesDev : makeStyles

export { makeStylesFinal as makeStyles, createTheme }

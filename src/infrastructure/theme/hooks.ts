import { useContext } from 'react'
import { ThemeContext } from './provider'
import { Theme } from './types'

export const useTheme = (): Theme => {
  const { theme } = useContext(ThemeContext)
  return theme
}

import { useMemo, ReactNode, createContext } from 'react'
import { Theme } from './types'


interface ThemeContextProps {
  theme: Theme
}

const ThemeContext = createContext({} as ThemeContextProps)

interface Props {
  theme: Theme;
  children: ReactNode;
}

const ThemeProvider = ({ theme, children }: Props) => {
  const value = useMemo(() => ({ theme }), [theme])

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext };

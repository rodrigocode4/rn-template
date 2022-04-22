import { render } from '@testing-library/react-native'
import { configureStoreApp } from './store'
import { Provider } from 'react-redux'

import { ThemeProvider } from './theme/provider'
import { createAppTheme } from './theme'

interface ProviderProps {
  children: JSX.Element
}
const custonRender = (
  ui: JSX.Element,
  store = configureStoreApp(),
  theme = createAppTheme()
) => {
  const wrapper = ({ children }: ProviderProps) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  )

  return {
    ...render(ui, { wrapper }),
    store
  }
}

export { custonRender as render }

export * from '@testing-library/react-native'

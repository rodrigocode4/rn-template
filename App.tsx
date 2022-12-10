import { StatusBar } from 'expo-status-bar'
import { Provider } from 'react-redux'
import { configureStoreApp } from '~/infrastructure/store'
import { createAppTheme } from '~/infrastructure/theme'
import { ThemeProvider } from '~/infrastructure/theme/provider'
import { AppRoutes } from '~/features/routes/Routes'

const theme = createAppTheme()
const store = configureStoreApp()

export default () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <StatusBar animated style="auto" hideTransitionAnimation="slide" />
      <AppRoutes />
    </ThemeProvider>
  </Provider>
)

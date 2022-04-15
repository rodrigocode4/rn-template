import { StatusBar } from 'expo-status-bar'
import { createAppTheme } from './src/infrastructure/theme'
import { ThemeProvider } from './src/infrastructure/theme/provider'
import Login from './src/modules/Login'

const theme = createAppTheme()

export default () => (
  <ThemeProvider theme={theme}>
    <StatusBar animated style="auto" hideTransitionAnimation="slide" />
    <Login />
  </ThemeProvider>
)

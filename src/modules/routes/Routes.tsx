import {
  NavigationContainer,
  createNavigationContainerRef
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../home'
import Login from '../login'
import { RootStackParamList, MainStackParamList } from './Routes.type'

type NavigationContainerType = RootStackParamList & MainStackParamList

const RootStack = createNativeStackNavigator<RootStackParamList>()

const navigationRef = createNavigationContainerRef<NavigationContainerType>()

const navigationSpreading = () => ({
  ...navigationRef,
  navigate: (name: keyof NavigationContainerType) => {
    if (navigationRef.isReady()) {
      return navigationRef.navigate(name)
    }
    return navigationRef.current?.getRootState()
  }
})

export const navigation = navigationSpreading()

export const AppRoutes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator>
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen name="LoginScreen" component={Login} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

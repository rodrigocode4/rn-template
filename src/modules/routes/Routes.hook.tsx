import {
  useNavigation,
  CompositeNavigationProp
} from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useMemo } from 'react'
import { RootStackParamList, MainStackParamList } from './Routes.type'

type RootNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList>,
  NativeStackNavigationProp<MainStackParamList>
>

const useAppNavigation = () => {
  const { navigate, ...rest } = useNavigation<RootNavigationProp>()
  return useMemo(
    () => ({
      navigate,
      ...rest
    }),
    [navigate]
  )
}

export { useAppNavigation }

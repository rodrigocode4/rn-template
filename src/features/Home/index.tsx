import { View, Text, Button } from 'react-native'
import { useAppNavigation } from '../routes/Routes.hook'

export default function HomeScreen() {
  const { navigate } = useAppNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <Button
        onPress={() => {
          navigate('LoginScreen')
        }}
        title="Ir para o Login"
      />
    </View>
  )
}

import { Text, Button } from 'react-native'
import { useAppNavigation } from '../routes/Routes.hook'
import { makeStyles } from '~/infrastructure/theme/styles'
import Container from '~/components/Container'

export default function HomeScreen() {
  const { navigate } = useAppNavigation()
  const styles = useStyles()

  return (
    <Container>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        onPress={() => {
          navigate('LoginScreen')
        }}
        title="Ir para o Login"
      />
    </Container>
  )
}

export const useStyles = makeStyles(({ spacing }) => ({
  text: {
    fontSize: spacing(4)
  }
}))

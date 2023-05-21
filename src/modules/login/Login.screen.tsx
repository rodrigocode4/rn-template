import * as React from 'react'
import { Button, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Container from '~/components/Container'
import Input from '~/components/Input'
import { makeStyles } from '~/infrastructure/theme/styles'
import { selectLogin } from './Login.selector'
import { actions } from './Login.slice'

export default function LoginScreen() {
  const styles = useStyles()

  const selectorLogin = useSelector(selectLogin)
  const dispatch = useDispatch()

  const handleChangeEmail = React.useCallback((text: string) => {
    dispatch(actions.setLogin({ email: text }))
  }, [])

  const handleChangePassword = (text: string) => {
    dispatch(actions.setLogin({ password: text }))
  }

  return (
    <Container>
      <Input
        onChangeText={handleChangeEmail}
        value={selectorLogin.email}
        keyboardType="email-address"
        placeholder="email@email.com"
      />
      <Input
        onChangeText={handleChangePassword}
        value={selectorLogin.password}
        keyboardType="visible-password"
        placeholder="********"
      />
      <Button
        title="buscar email"
        color="#6600a1c1"
        onPress={() => {
          dispatch(actions.login())
        }}
      />
      <Text style={styles.text}>email: {selectorLogin.email}</Text>
      <Text style={styles.text}>password: {selectorLogin.password}</Text>
    </Container>
  )
}

export const useStyles = makeStyles(({ palette, spacing }) => ({
  text: {
    color: palette.common?.black,
    fontSize: spacing(2),
    textAlign: 'left',
    backgroundColor: palette.primary.contrastText.dark
  },
  input: {
    height: spacing(5),
    width: spacing(40),
    borderWidth: spacing(0.2),
    paddingHorizontal: spacing()
  }
}))

import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Input from '~/components/Input'
import { selectLogin } from './Login.selectors'
import { actions } from './Login.slice'
import { useLoginStyles } from './Login.styles'

export default () => {
  const styles = useLoginStyles()

  const selectorLogin = useSelector(selectLogin)
  const dispatch = useDispatch()

  const handleChangeEmail = React.useCallback((text: string) => {
    dispatch(actions.setLogin({ email: text }))
  }, [])

  const handleChangePassword = (text: string) => {
    dispatch(actions.setLogin({ password: text }))
  }

  return (
    <View style={styles.container}>
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
    </View>
  )
}

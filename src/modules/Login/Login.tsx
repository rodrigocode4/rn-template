import { useCallback, useReducer } from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Input from '~/components/Input'
import { selectEmail, selectLogin } from './Login.selectors'
import { actionsLogin } from './Login.state'
import { useLoginStyles } from './Login.styles'

type Action = {
  type: 'SET_EMAIL' | 'SET_PASSWORD'
  payload: string
}

const initialState = {
  email: '',
  password: ''
}

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload }
    case 'SET_PASSWORD':
      return { ...state, password: action.payload }
    default:
      return state
  }
}

export default () => {
  const styles = useLoginStyles()
  const [{ email, password }, dispatch] = useReducer(reducer, initialState)

  const emailSelect = useSelector(selectEmail)
  const selectorLogin = useSelector(selectLogin)
  const dispatchRedux = useDispatch()

  const handleChangeEmail = useCallback(
    (text: string) => {
      dispatch({ type: 'SET_EMAIL', payload: text })
    },
    [dispatch]
  )
  const handleChangePassword = useCallback(
    (text: string) => {
      dispatch({ type: 'SET_PASSWORD', payload: text })
    },
    [dispatch]
  )

  return (
    <View style={styles.container}>
      <Input
        labelText="Email:"
        onChangeText={handleChangeEmail}
        value={email}
        keyboardType="email-address"
        placeholder="email@email.com"
      />
      <Input
        labelText="Senha:"
        onChangeText={handleChangePassword}
        value={password}
        keyboardType="visible-password"
        placeholder="********"
      />
      <Button
        title="buscar email"
        color="#6600a1c1"
        onPress={() => {
          console.log('click')
          dispatchRedux(actionsLogin.login())
        }}
      />
      <Text style={styles.text}>email: {emailSelect}</Text>
      <Text style={styles.text}>password: {selectorLogin.password}</Text>
    </View>
  )
}

import { useCallback, useReducer } from 'react'
import { Text, View, } from 'react-native'
import Input from '~/components/Input'
import { useLoginStyles } from './Login.styles'


export enum actionsType { 
    SET_EMAIL = 'SET_EMAIL', 
    SET_PASSWORD = 'SET_PASSWORD' 
} 

type Action = {
    type: keyof typeof actionsType,
    payload: string,
}

const initialState = {
    email: '',
    password: ''
}

const reducer = (state: typeof initialState, action: Action) => {
    switch(action.type) {
        case actionsType.SET_EMAIL: 
            return {...state, email: action.payload};
        case actionsType.SET_PASSWORD: 
            return {...state, password: action.payload};
        default: 
            return state
    }
}

export default () => {
  const styles = useLoginStyles()
  const [{email, password}, dispatch] = useReducer(reducer, initialState)

  const handleChangeEmail = useCallback((text: string) => {
    dispatch({type: 'SET_EMAIL', payload: text})
  }, [])
  const handleChangePassword = useCallback((text: string) => {
    dispatch({type: 'SET_PASSWORD', payload: text})
  }, [])

  return (
        <View style={styles.container}>
            <Input 
                labelText='Email:'
                onChangeText={handleChangeEmail}
                value={email}
                keyboardType='email-address'
                placeholder='email@email.com'
            />
             <Input
                labelText='Senha:'
                onChangeText={handleChangePassword}
                value={password}
                keyboardType='visible-password'
                placeholder='********'
            />
            <Text style={styles.text}>{email || 'email'}</Text>
            <Text style={styles.text}>{password || 'senha'}</Text>
        </View>

  )

}

  
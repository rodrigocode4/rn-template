import { createSlice } from '@reduxjs/toolkit'

import { Login, Reducer } from './Login.types'

const initialState: Login = {
  email: '',
  password: ''
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const login = () => {}

const setLogin: Reducer<Login> = (state, action) => {
  state.email = action.payload.email
  state.password = action.payload.password
}

const { actions: actionsLogin, reducer: reducerLogin } = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login,
    setLogin
  }
})

export { actionsLogin, reducerLogin }

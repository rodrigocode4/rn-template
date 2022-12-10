import { createSlice } from '@reduxjs/toolkit'
import { Reducer } from '../types'

import { Login } from './Login.types'

const initialState: Login = {
  email: '',
  password: ''
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const login = () => {}

const setLogin: Reducer<Login> = (state, action) => ({
  ...state,
  ...action.payload,
  w: 1
})

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin,
    login
  }
})

export const { actions } = slice

export default slice.reducer

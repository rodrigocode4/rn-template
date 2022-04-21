import { combineReducers } from '@reduxjs/toolkit'
import { reducerLogin } from './Login/Login.state'
import { State } from './types'

export default combineReducers<State>({
  login: reducerLogin
})

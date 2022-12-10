import { combineReducers } from '@reduxjs/toolkit'
import logiReducer from './Login/Login.slice'
import { State } from './types'

export default combineReducers<State>({
  login: logiReducer
})

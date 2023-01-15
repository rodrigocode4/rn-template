import { combineReducers } from '@reduxjs/toolkit'
import logiReducer from './login/Login.slice'
import { State } from './type'

export default combineReducers<State>({
  login: logiReducer
})

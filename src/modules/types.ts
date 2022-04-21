import { PayloadAction } from '@reduxjs/toolkit'
import { Login } from './Login/Login.types'

export type Reducer<T> = (state: T, action: PayloadAction<T>) => T | void

export interface State {
  login: Login
}

import { PayloadAction } from '@reduxjs/toolkit'
import { Login } from './login/Login.types'

export type Reducer<T> = (state: T, action: PayloadAction<T>) => T

export interface State {
  login: Login
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ReturnCall<T extends (...args: any) => any> = Awaited<ReturnType<T>>

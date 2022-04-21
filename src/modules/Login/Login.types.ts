import { PayloadAction } from '@reduxjs/toolkit'

export type Reducer<T> = (state: T, action: PayloadAction<T>) => T | void

export interface Login {
  email: string
  password: string
}

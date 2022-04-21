import { createSelector } from '@reduxjs/toolkit'
import { State } from '../types'

export const selectLogin = (state: State) => state.login

export const selectEmail = createSelector(selectLogin, (state) => state.email)

/* eslint-disable @typescript-eslint/no-explicit-any */
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { navigation } from '../routes/Routes'
import { ReturnCall } from '../types'
import { loginApi } from './Login.apis'
import { actions } from './Login.slice'

function* login() {
  try {
    const { data }: ReturnCall<typeof loginApi> = yield call(loginApi)
    yield put(actions.setLogin(data))
    yield call(navigation.navigate, 'HomeScreen')
  } catch (error: any) {
    yield call(
      console.log,
      `Error: ${error?.response?.data?.message || error?.message}`
    )
  } finally {
    yield call(console.log, 'Cabou!!!')
  }
}

export function* allLoginSagas() {
  yield all([takeEvery(actions.login.type, login)])
}

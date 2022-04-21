/* eslint-disable @typescript-eslint/no-explicit-any */
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { loginApi } from './Login.apis'
import { actionsLogin } from './Login.state'

function* login() {
  try {
    const { data } = yield call(loginApi)
    yield put(actionsLogin.setLogin(data))
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
  yield all([takeEvery(actionsLogin.login.type, login)])
}

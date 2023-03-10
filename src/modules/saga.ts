import { all, call } from 'redux-saga/effects'
import { allLoginSagas } from './login/Login.saga'

export default function* () {
  yield all([call(allLoginSagas)])
}

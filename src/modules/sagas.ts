import { all } from 'redux-saga/effects'
import { allLoginSagas } from './Login/Login.sagas'

export default function* () {
  yield all([allLoginSagas()])
}

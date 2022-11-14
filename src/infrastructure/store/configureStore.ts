import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import reducer from '~/features/reducers'
import sagas from '~/features/sagas'

const sagaMiddleware = createSagaMiddleware()

export const configureStoreApp = () => {
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        thunk: false
      }),
      sagaMiddleware
    ]
  })

  sagaMiddleware.run(sagas)

  return store
}

import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import reducer from '~/modules/reducer'
import sagas from '~/modules/saga'

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

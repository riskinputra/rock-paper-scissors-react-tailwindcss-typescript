import { configureStore } from '@reduxjs/toolkit'

import rootReducer from 'reducers'

const store = configureStore({
  reducer: rootReducer
})

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('reducers/index', () => {
    const newRootReducer = require('reducers/index').default
    store.replaceReducer(newRootReducer)
  })
}

export type AppDispatch = typeof store.dispatch

export default store

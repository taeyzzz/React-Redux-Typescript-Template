import { configureStore, combineReducers, Store } from '@reduxjs/toolkit'

import applicationReducer from './slices/application'

const rootReducers = combineReducers({
  application: applicationReducer,
})

export type RootState = ReturnType<typeof rootReducers>

const createStore = (reducerInitialState?: RootState): Store => {
  const store = configureStore({
    reducer: rootReducers,
    preloadedState: reducerInitialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
  })
  return store
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch']

export default createStore

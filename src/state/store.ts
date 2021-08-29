import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/UserSlice'
import menuReducer from './slices/MenuSlice'
import quoteReducer from './slices/QuoteSlice'
import loaderReducer from './slices/LoaderSlice'

export const store = configureStore({
  reducer: { userReducer, menuReducer, quoteReducer, loaderReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

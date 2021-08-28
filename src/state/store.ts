import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/UserSlice'
import menuReducer from './slices/MenuSlice'
import quoteReducer from './slices/QuoteSlice'

export const store = configureStore({
  reducer: { userReducer, menuReducer, quoteReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

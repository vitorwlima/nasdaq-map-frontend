import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/UserSlice'
import menuReducer from './slices/MenuSlice'

export const store = configureStore({
  reducer: { userReducer, menuReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

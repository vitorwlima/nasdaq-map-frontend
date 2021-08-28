import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../interfaces'
import api from '../../services/api'

type InitialState = {
  user: IUser | null
}

const initialState: InitialState = {
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user
      api.defaults.headers['Authorization'] = `Bearer ${action.payload.token}`
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer

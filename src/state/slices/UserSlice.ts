import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../interfaces'

type InitialState = {
  user: IUser | null
  token: string
}

const initialState: InitialState = {
  user: null,
  token: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer

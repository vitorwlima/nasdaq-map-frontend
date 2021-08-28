import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  open: boolean
}

const initialState: InitialState = {
  open: false,
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setOpenMenu: (state, action) => {
      state.open = action.payload
    },
  },
})

export const { setOpenMenu } = menuSlice.actions
export default menuSlice.reducer

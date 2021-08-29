import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  open: boolean
}

const initialState: InitialState = {
  open: false,
}

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoaderOpen: (state, action) => {
      state.open = action.payload
    },
  },
})

export const { setLoaderOpen } = loaderSlice.actions
export default loaderSlice.reducer

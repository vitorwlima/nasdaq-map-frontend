import { createSlice } from '@reduxjs/toolkit'
import { IIntradayPrices } from '../../interfaces/IIntradayPrices'
import { IQuote } from '../../interfaces/IQuote'

type InitialState = {
  quote: IQuote | null
  intradayQuote: IIntradayPrices
}

const initialState: InitialState = {
  quote: null,
  intradayQuote: [],
}

const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    setQuoteInfo: (state, action) => {
      state.quote = action.payload.quote
      state.intradayQuote = action.payload.intradayQuote
    },
  },
})

export const { setQuoteInfo } = quoteSlice.actions
export default quoteSlice.reducer

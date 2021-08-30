import { createSlice } from '@reduxjs/toolkit'
import { IQuoteNews } from '../../interfaces'
import { IIntradayPrices } from '../../interfaces/IIntradayPrices'
import { IQuote } from '../../interfaces/IQuote'

type InitialState = {
  quote: IQuote | null
  intradayQuote: IIntradayPrices
  quoteNews: IQuoteNews[]
}

const initialState: InitialState = {
  quote: null,
  intradayQuote: [],
  quoteNews: [],
}

const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    setQuoteInfo: (state, action) => {
      state.quote = action.payload.quote
      state.intradayQuote = action.payload.intradayQuote
      state.quoteNews = action.payload.quoteNews
    },
  },
})

export const { setQuoteInfo } = quoteSlice.actions
export default quoteSlice.reducer

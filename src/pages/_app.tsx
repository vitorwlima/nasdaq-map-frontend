import '../styles/fonts.css'
import GlobalStyles from '../styles/GlobalStyles'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../state/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp

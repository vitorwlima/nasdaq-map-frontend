import '../styles/fonts.css'
import GlobalStyles from '../styles/GlobalStyles'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../state/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp

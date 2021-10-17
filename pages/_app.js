import '../styles/globals.css'
import { TestHookProvider } from '../test-hook'

function MyApp({ Component, pageProps }) {
  return <TestHookProvider><Component {...pageProps} /></TestHookProvider>
}

export default MyApp

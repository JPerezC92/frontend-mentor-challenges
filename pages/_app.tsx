import { AppProps } from 'next/dist/next-server/lib/router/router'
import '@/shared/styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div id="app">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

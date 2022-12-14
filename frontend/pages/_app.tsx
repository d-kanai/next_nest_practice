import '../styles/global.css';
import { SessionProvider } from "next-auth/react"
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import {initializeApollo} from '../libs/appoloClient';
import { ThemeProvider } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client'
import { CssBaseline } from '@mui/material';
import theme from '../libs/theme'

const cache = createCache({ key: 'css' });

export default function App({ Component, pageProps: {session, ...pageProps} }, AppProps) {
  const client = initializeApollo()
  const getLayout = Component.getLayout || ((page) => page)
  return (
    // <CacheProvider value={cache}>
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <ApolloProvider client={client}>
          {getLayout(<Component {...pageProps} />)}
        </ApolloProvider>
      </ThemeProvider>
    </SessionProvider>
    // {/* // </CacheProvider> */}
  )
}
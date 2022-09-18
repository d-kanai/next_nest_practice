import '../styles/global.css';
import {initializeApollo} from '../libs/appoloClient';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ApolloProvider } from '@apollo/client'
import { CssBaseline } from '@mui/material';
import theme from '../libs/theme'

export default function App({ Component, pageProps }, AppProps) {
    //MEMO: CssBaseLine must load before 'getLayout'
    return (<><CssBaseline /><Page Component={Component} pageProps={pageProps}/></>)
}

function Page({ Component, pageProps }) {
  const client = initializeApollo()
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
  )
}
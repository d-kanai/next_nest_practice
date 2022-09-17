import '../styles/global.css';
import {initializeApollo} from '../libs/appoloClient';
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

export default function App({ Component, pageProps }, AppProps) {
    const client = initializeApollo()
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(
        <ApolloProvider client={client}>
            <Component {...pageProps} />;
        </ApolloProvider>

    )
}
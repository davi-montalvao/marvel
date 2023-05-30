import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { GlobalStyle } from "../styles/styles";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header />
    <GlobalStyle />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

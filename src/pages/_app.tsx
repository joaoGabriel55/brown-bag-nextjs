import { AppProps } from 'next/app'
import React from "react"
import Footer from './shared/components/Footer'
import Header from './shared/components/header'
import './styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="main-app">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )

}

export default MyApp

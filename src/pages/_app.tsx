import { AppProps } from 'next/app'
import React from "react"
import Footer from './components/Footer'
import Header from './components/Header'
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

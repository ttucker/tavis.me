import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

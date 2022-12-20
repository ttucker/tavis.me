import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import { PT_Sans } from '@next/font/google'
import { Cardo } from '@next/font/google'
import "../styles/globals.scss"

export const ptSans = PT_Sans({ weight: "400", fallback: ["Trebuchet MS", "Geneva", "Helvetica Neue", "sans-serif"] })
export const cardo = Cardo({ weight: "400", fallback: ["Times", "Times New Roman", "serif"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${ptSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

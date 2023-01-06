import type { AppProps } from "next/app"
import { motion, AnimatePresence } from "framer-motion"
import localFont from "@next/font/local"
import "../styles/globals.scss"

export const ptSans = localFont({ src: "../public/PTSans-Regular.woff2", weight: "400", style: "normal", fallback: ["Trebuchet MS", "Geneva", "Helvetica Neue", "sans-serif"] })
export const cardo = localFont({ src: "../public/Cardo-Regular.woff2", weight: "400", style: "normal", fallback: ["Times", "Times New Roman", "serif"] })

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${ptSans.style.fontFamily};
        }
      `}</style>
      <AnimatePresence>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  )
}

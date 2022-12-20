import { useEffect, useState } from "react"
import Head from "next/head"
import { cardo } from "./_app"
import styles from "../styles/home.module.scss"
import Navigation from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer"
import homeImg from "../public/home.jpg"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <Head><title>Home | tavis.me | Tavis Tucker</title></Head>
      <Hero imgSrc={homeImg} loading={loading} />
      <blockquote className={loading ? `${styles.blockquote} ${styles.off} ${cardo.className}` : `${styles.blockquote} ${styles.on} ${cardo.className}`}>Hello and <i>welcome</i> to my website</blockquote>
      <Navigation />
      <Footer />
    </>
  )
}

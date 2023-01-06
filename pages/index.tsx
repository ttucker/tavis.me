import { useEffect, useState } from "react"
import Head from "next/head"
import { motion } from "framer-motion"
import { cardo } from "./_app"
import styles from "../styles/home.module.scss"
import Header from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer"
import homeImg from "../public/home.jpg"

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const motionStates = {
    initial: {
      bottom: "150%"
    },
    animate: {
      bottom: "67%"
    },
    exit: {
      bottom: "150%"
    }
  }

  // this will only work on page load which will have to be good enough
  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches)
  }, [])

  return (
    <>
      <Head><title>Home | tavis.me | Tavis Tucker</title></Head>
      <Hero imgSrc={homeImg} />
      <motion.blockquote
        variants={!isMobile ? motionStates : undefined}
        transition={{ ease: "easeOut", duration: .4, delay: .2 }}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`${styles.blockquote} ${cardo.className}`}>
        Hello and <i>welcome</i> to my website
      </motion.blockquote>
      <Header />
      <Footer />
    </>
  )
}

import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'
import missionImg from '../public/mission.jpg'

export default function Mission() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <Head><title>Mission | tavis.me | Tavis Tucker</title></Head>
      <Hero imgSrc={missionImg} loading={loading} />
      <Navigation />
      <main>
        <article className={loading ? 'off' : 'on'}>
          <h3>Mission</h3>
          <h4>Make a difference.</h4>
          <p>More than anything, I want to help make the world a better place with the work I do and the way I live, be a vessel of change for the greater good. Or something like that.</p>
          <h4>Seek new challenges.</h4>
          <p>Each day, I want to use less carbon and more of my abilities, to work with like-minded people that are passionate about the work they do, whatever it might be.</p>
          <h4>Help others succeed.</h4>
          <p>I&#39;m ready to work hard for you and bring a wealth of <Link key="services" href="/services">knowledge</Link> and <Link key="projects" href="/projects">skills</Link> to the table, so if you have an opportunity that might be of interest, please <Link key="contact" href="/contact">get in touch</Link>.</p>
        </article>
      </main>
      <Footer />
    </>
  )
}

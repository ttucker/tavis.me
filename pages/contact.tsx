import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'
import contactImg from '../public/contact.jpg'

export default function Contact() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <Head><title>Contact | tavis.me | Tavis Tucker</title></Head>
      <Hero imgSrc={contactImg} loading={loading} />
      <Navigation />
      <main>
        <article className={loading ? `off` : `on`}>
          <h3>Contact</h3>
          <h4>Please do get in touch.</h4>
          <p>I hope to have a handy contact form here for your convenience soon, but in the meantime try me via:</p>
          <ol>
            <li><Link key="email" href="mailto:tavis.tucker@gmail.com?subject=Getting in touch...">Email</Link></li>
            <li><Link key="discord" href="https://discord.com/users/1043695714024312872">Discord</Link></li>
            <li><Link key="linkedin" href="https://www.linkedin.com/in/tavistucker">LinkedIn</Link></li>
          </ol>
        </article>
      </main>
      <Footer />
    </>
  )
}

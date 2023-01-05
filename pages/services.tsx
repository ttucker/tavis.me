import Head from "next/head"
import Link from "next/link"
import Header from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer"
import servicesImg from "../public/services.jpg"

export default function Resume() {
  return (
    <>
      <Head><title>Services | tavis.me | Tavis Tucker</title></Head>
      <Hero imgSrc={servicesImg} />
      <Header />
      <main>
        <article>
            <h3>Services</h3>
            <h4>Here&#39;s how I can help you.</h4>
            <p>Whether you&#39;re an interactive media agency looking for a full-time developer or a small business owner that needs an
                online presence, we should talk. Though my primary area of <Link key="projects" href="/projects">experience</Link> and interest lies in translating
                static designs into dynamic user interfaces, I could:</p>
            <ul>
                <li>Create a responsive web-based single page application</li>
                <li>Redesign and/or build a new website with a CMS backend</li>
                <li>Provide recommendations to improve user experience</li>
                <li>Help architect a website development project</li>
                <li>Add search engine optimization or analytics solutions</li>
                <li>Implement a blogging platform to give you a voice</li>
                <li>Bring your new and interesting idea to life</li>
            </ul>
            <p>Need help? <Link key="contact" href="/contact">Get in touch</Link> and let&#39;s start a conversation!</p>
        </article>
      </main>
      <Footer />
    </>
  )
}

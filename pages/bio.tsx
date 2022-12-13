import { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Navigation from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer"
import bioImg from "../public/bio.jpg"

export default function Bio() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <Head><title>Bio | tavis.me | Tavis Tucker</title></Head>
      <Hero imgSrc={bioImg} loading={loading} />
      <Navigation />
      <main>
        <article className={loading ? 'off' : 'on'}>
          <h3>Bio</h3>
          <h4>My name is Tavis Tucker, and tavis.me is my portfolio site.</h4>
          <p>I attended Western Maryland College and graduated with a Math major and Secondary Education minor, but also studied
            programming, physics and the required liberal arts subjects too. After college, I taught Math to 7<sup>th</sup> and 8<sup>th</sup>
            graders for two years before deciding to return to school, study web development and start down a new career path.</p>
          <p>In 2003, I got started as Junior Web Developer with travel industry startup E-site Marketing which was acquired and is now
            called <Link key="SHS" href="http://www.sabrehospitality.com/">Sabre Hospitality Solutions</Link>. I eventually grew from Senior Developer to the
            role of Web Development Manager and was responsible for a team of up to 17 developers, about half of which were home-based.
            My colleagues and I earned over 100 Internet awards, amassing 50 <Link key="webaward" href="http://www.webaward.org/">WebAwards</Link> in two years, 11
            Gold <Link key="w3" href="http://www.w3award.com/">W<sup>3</sup> Awards</Link> and 11 (hospitality industry-specific) <Link key="adrian" href="http://www.adrianawards.com/">Adrian Awards</Link> in 2012 alone.</p>
          <p>After 10 years, I felt that a role change was needed. That brought me, my wife and our furry children to the beautiful Pacific Northwest
            and the Seattle area where I&#39;ve been serving as Front End Developer for the past year and a half for <Link key="apptio" href="http://www.apptio.com">Apptio</Link>,
            a growing software development company in Bellevue. I have been fortunate enough to work on the company&#39;s <Link key="it-planning" href="http://www.apptio.com/applications/it-planning">first SaaS application</Link>,
            and to have participated in the entire lifecycle of the project as a member of the Product Design team under the
            watchful UX eye of <Link key="moron" href="https://usabilitycounts.com/">Patrick Neeman</Link>, who has been a great teacher to say the least.</p>
          <p>Joining the company practically at the project&#39;s onset, my involvement began in the design process, prototyping in HTML/CSS/JS and
            implementing a framework using Zurb Foundation with SCSS and PHP for rapidly iterating on designs. Much of the front end code has eventually turned
            into production code &mdash; I transitioned to work with the engineering team once the design was mostly done to
            implement the design in the product as it got built.</p>
          <p>My time at Apptio has given me invaluable experience working within an Agile/Scrum team building software as well as better
            UX and interaction design skills, and allowed me to help the company get a well-polished app delivered to market on time.
            It has been great to be writing code most of the time rather than being in meetings, but I find myself wanting something more fast-paced. </p>
          <p>So, I&#39;m <Link key="mission" href="/mission">ready to move on</Link> and find a &#34;better fit&#34; if you like.</p>
        </article>
      </main>
      <Footer />
    </>
  )
}

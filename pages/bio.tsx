import Head from "next/head"
import Link from "next/link"
import Header from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer"
import bioImg from "../public/bio.jpg"

export default function Bio() {
  return (
    <>
      <Head><title>Bio | tavis.me | Tavis Tucker</title></Head>
      <Hero imgSrc={bioImg} />
      <Header />
      <main>
        <article>
          <h3>Bio</h3>
          <h4>My name is Tavis Tucker, and tavis.me is my portfolio site.</h4>
          <p>I attended Western Maryland College (now <Link key="mcdaniel" href="https://www.mcdaniel.edu">McDaniel College</Link>) where I graduated <i>cum laude</i> with
            a Math major and Secondary Education minor, but also studied programming, physics and the required liberal arts subjects too. After college, I taught Math 
            to 7<sup>th</sup> and 8<sup>th</sup> grade students for two years before deciding to return to school, study web development and start down a new career path.</p>
          <p>In 2003, I got started as Junior Web Developer with travel industry startup E-site Marketing which was acquired and is now
            called <Link key="SHS" href="http://www.sabrehospitality.com/">Sabre Hospitality Solutions</Link>. I grew from Senior Developer
            into the role of Web Development Manager and was responsible for a team of up to 17 developers, about half of which were home-based.
            My colleagues and I earned over 100 Internet awards, amassing 50 <Link key="webaward" href="http://www.webaward.org/">WebAwards</Link> in two years, 11
            Gold <Link key="w3" href="http://www.w3award.com/">W<sup>3</sup> Awards</Link> and 11 (hospitality industry-specific) <Link key="adrian" href="http://www.adrianawards.com/">Adrian Awards</Link> in 2012 alone.</p>
          <p>After 10 years at SHS and seven as a manager, I wanted a role change back to individual contributor once again, so my wife, our furry children and I headed to Seattle 
            in the beautiful Pacific Northwest, where I served as Front End Developer for <Link key="apptio" href="http://www.apptio.com">Apptio</Link>. I participated in the entire 
            lifecycle of the company&#39;s <Link key="it-planning" href="http://www.apptio.com/applications/it-planning">first SaaS application</Link> as a member of the Product Design 
            team using Zurb&#39;s Foundation library, JavaScript, HTML, and SCSS to prototype and rapidly iterate on design concepts, but once the user experience was solidified I transitioned 
            to the engineering organization to integrate it in the product as it was being built. My time at Apptio gave me invaluable experience collaborating with an Agile/Scrum team 
            building software as well as better UX and interaction design skills, but I soon found myself wanting a fully remote role without the Seattle area traffic.</p>
          <p>That brought me to <Link key="tenable" href="https://www.tenable.com">Tenable</Link> in 2015, where I was able to bootstrap multiple new products including Dashboards, 
            Reporting, PCI ASV and MSSP offerings for <Link key="tenable-io" href="https://www.tenable.com/products/tenable-io">Tenable.io</Link>. Most recently, I helped deliver a complete 
            redesign for the next major version release of <Link key="tenable-sc" href="https://www.tenable.com/products/tenable-sc">Tenable.sc</Link> by implementing design system tokens 
            throughout all UI components and styling them to meet Figma specifications. At Tenable, while I was building features and creating components within the company&#39;s design system, 
            most of my coding utilized React, Redux, Styled Components and CSS/SCSS, but I also became familiar with Lit web components, Nx, Webpack, Jenkins CI/CD and e2e testing with Sauce Labs 
            and Webdriver.io as well. I&#39;m very grateful for the amazing people I worked with and the opportunities I had to grow my skillset and responsibilities, but now, I&#39;m <Link key="mission" href="/mission">ready to move on</Link>.</p>
        </article>
      </main>
      <Footer />
    </>
  )
}

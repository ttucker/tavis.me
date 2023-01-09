import Head from "next/head"
import Link from "next/link"
import Header from "../components/header"
import Hero from "../components/hero"
import Article from "../components/article"
import Footer from "../components/footer"
import projectsImg from "../public/projects.jpg"

export default function Projects() {
  return (
    <>
      <Head><title>Projects | tavis.me | Tavis Tucker</title></Head>
      <Hero imgSrc={projectsImg} />
      <Header />
      <main>
        <Article>
            <h3>Projects</h3>

            <h4>@Tenable</h4>
            <p>I was fortunate to have many opportunities at Tenable to bootstrap several new features and applications.</p>
            <dl>
                <dt><Link key="tenable-io" href="https://www.tenable.com/products/tenable-io">Product Marketing Page</Link></dt>
                <dd>Tenable.io</dd>
                <dd>
                    <ul>
                        <li>Worked with team members to develop first Tenable design system and component library</li>
                        <li>Created custom dashboard and reporting functionality including user-configured visualizations and drag and drop</li>
                        <li>Greenfield engineering for PCI ASV and MSSP features</li>
                    </ul>
                </dd>

                <dt><Link key="tenable-sc" href="https://www.tenable.com/products/tenable-sc">Product Marketing Page</Link></dt>
                <dd>Tenable.sc</dd>
                <dd>
                    <ul>
                        <li>Applied design system tokens to reskin existing UI components and deliver full application redesign for first major version release in eight years</li>
                        <li>Established standards for thorough code review and positive collaboration between disparate teams</li>
                    </ul>
                </dd>

                <dd>Tenable Cloud</dd>
                <dd>
                    <ul>
                        <li>Worked to create API key generation and CAPTCHA features</li>
                        <li>Developed custom AsciiDoc to HTML conversion for online API documentation</li>
                        <li>Researched and prototyped native web components to vet the possibility of migrating</li>
                    </ul>
                </dd>
            </dl>

            <h4>@Apptio</h4>
            <p>Most of my tenure was devoted to helping build Apptio&#39;s latest product.</p>
            <dl>
                <dt><Link key="it-planning" href="http://www.apptio.com/applications/it-planning">Product Marketing Page</Link></dt>
                <dd>Apptio IT Planning Foundation</dd>
                <dd>
                    <ul>
                        <li>Created prototype under direction of Director of Product Design and lead UX Designer,
                            along with Visual Designer and another front end developer</li>
                        <li>Primary front end developer for tablet-up responsive web app</li>
                        <li>Filled the role of part engineer, part UX advocate/expert during development</li>
                        <li>Implemented Zurb&#39;s Foundation HTML/SCSS/CSS/JS library within Java backend</li>
                        <li>Learned basics of Knockout.js/Durandal.js data-bindings</li>
                        <li>Built various charts/diagrams using Highcharts and D3 SVG frameworks</li>
                    </ul>
                </dd>
            </dl>

            <h4>@Sabre</h4>
            <p>These are some projects I developed at Sabre Hospitality Solutions, though most have since been redeveloped.</p>
            <dl>
                <dt><Link key="sandy-lane" href="https://www.sandylane.com/barbados-golf/green-monkey-golf-course">sandylane.com</Link></dt>
                <dd>Sandy Lane</dd>
                <dd>St. James, Barbados, West Indies</dd>
                <dd>
                    <ul>
                        <li>XML/XSLT website framework</li>
                        <li>jQuery scripting for scaling, automatic pagination and interactive golf course map</li>
                    </ul>
                </dd>
                <dd>Trump Hotel Collection</dd>
                <dd>New York, New York</dd>
                <dd>
                    <ul>
                        <li>Lead developer for project; served as company liaison between client and third party design firm to facilitate success</li>
                        <li>Integrated HTML/CSS with custom content management system</li>
                        <li>Developed PHP and XSLT template logic</li>
                    </ul>
                </dd>
                <dd>Destination Hotels &amp; Resorts</dd>
                <dd>Englewood, Colorado</dd>
                <dd>
                    <ul>
                        <li>HTML/CSS front-end development</li>
                        <li>Primary developer for company&#39;s largest website project</li>
                    </ul>
                </dd>
                <dd>Facebook Booking Widget</dd>
                <dd>
                    <ul>
                        <li>Developed prototype version of Facebook App enabling users to book hotel reservations without leaving the Facebook website</li>
                        <li>Product had been replicated and sold nearly 200 times, generating $250K plus in revenue at the time of my departure</li>
                        <li>Client ROI was approximately 12:1 due to efficiency and speed of development allowing low price point</li>
                    </ul>
                </dd>
            </dl>

            <h4>@Independent Consulting</h4>

            <p>Note: websites below have undergone redevelopment since my involvement, so I take no credit for them in their current state! Sample code can be provided if requested.</p>
            <dl>
                <dt><Link key="advantage-im" href="http://www.advantageim.com/">www.advantageim.com</Link></dt>
                <dd>Advantage Internet Marketing</dd>
                <dd>Sykesville, MD</dd>
                <dd>
                    <ul>
                        <li>Promotional websites for local businesses with HTML, CSS and JS</li>
                        <li>Simple guest book with ASP/SQL feature for the Girl Scouts of Central Maryland</li>
                        <li>Programming using PHP/MySQL for form data processing</li>
                    </ul>
                </dd>
                <dt><Link key="md-life" href="http://www.marylandlife.com">www.marylandlife.com</Link></dt>
                <dd>Maryland Life Magazine</dd>
                <dd>Frederick, Maryland</dd>
                <dd>
                    <ul>
                        <li>Worked directly with magazine publishing company President and Editor-in-Chief throughout project to ensure success</li>
                        <li>Collaborated with freelance designer on website user interface redesign</li>
                        <li>Developed front-end HTML and CSS templates</li>
                    </ul>
                </dd>
                <dt><Link key="baynet" href="http://www.thebaynet.com">www.thebaynet.com</Link></dt>
                <dd>The Bay Net</dd>
                <dd>Lexington Park, Maryland</dd>
                <dd>
                    <ul>
                        <li>Developed HTML, CSS and Javascript for local online news website</li>
                        <li>Worked closely with proprietor, programmer and designer to redesign and redevelop website</li>
                        <li>Coordinated CMS programming with back-end developers</li>
                    </ul>
                </dd>
                <dt><Link key="bang" href="http://www.bangcartoon.com/">www.bangcartoon.com</Link></dt>
                <dd>Bang! Cartoons</dd>
                <dd>
                    <ul>
                        <li>Designed and developed website for sports cartoonist and radio personality</li>
                        <li>Gained design experience bringing artist&#39;s creative vision to life</li>
                    </ul>
                </dd>
            </dl>
        </Article>
      </main>
      <Footer />
    </>
  )
}

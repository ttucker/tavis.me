import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'
import resumeImg from '../public/resume.jpg'

export default function Resume() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <Head><title>Resumé | tavis.me | Tavis Tucker</title></Head>
      <Hero imgSrc={resumeImg} loading={loading} />
      <Navigation />
      <main>
        <article className={loading ? `off` : `on`}>
            <h3>Resumé</h3>

            <h4>Objective</h4>
            <p>Seasoned user interface developer and Internet technology expert with 12+ years experience seeks interesting
                challenges and new opportunities with like-minded, creative professionals.</p>
            <p>Tavis Tucker is a developer that loves to code challenging new layouts and interactions, apply bleeding-edge open source solutions, and collaborate with designers and other developers working for a small creative agency, non-profit organization or product development company.</p>

            <h4>Skills</h4>
            <ul>
                <li>Advanced HTML5 and CSS3; Responsive Design websites and applications</li>
                <li>JavaScript, jQuery and basic knowledge of MV* libraries Node, React and Knockout</li>
                <li>Zurb Foundation, jQuery UI and Twitter Bootstrap UI libraries</li>
                <li>Well-rounded web generalist, full-stack competence with PHP and MySQL</li>
                <li>Data visualization concepts and libraries like Highcharts and D3</li>
                <li>Proficient in Adobe Creative Suite</li>
                <li>JSON/REST API and Web Services</li>
            </ul>

            <h4>Accomplishments</h4>
            <ul>
                <li>Apptio IT Planning Foundation, <Link key="it-planning" href="http://www.apptio.com/applications/it-planning">www.apptio.com/applications/it-planning</Link>, led the prototype development for application, wrote front end code for final product</li>
                <li>Trump Hotel Collection, <Link key="trump" href="http://www.trumphotelcollection.com">www.trumphotelcollection.com</Link>, CMS integration and lead developer for company’s most efficient project to date</li>
                <li>Destination Hotels & Resorts, <Link key="destination-hotels" href="http://www.destinationhotels.com">www.destinationhotels.com</Link>, HTML/CSS front end development compatible with IE7 and up</li>
                <li>Sandy Lane, <Link key="sandy-lane" href="http://www.sandylane.com">www.sandylane.com</Link>, website framework example and jQuery scripting for scaling, automatic pagination and interactive golf course map</li>
                <li>Facebook Booking Engine, <Link key="montage" href="https://www.facebook.com/MontageBeverlyHills/app_388250147877485">Example App</Link>, prototype of hotel room availability search app with Facebook Developer API; product generated over $250K in revenue in less than two years for one month development time; efficiency and speed of development allowed for low price point and approximate 12:1 client ROI</li>
            </ul>

            <h4>Experience</h4>
            <dl>
                <dt>October 2013 &ndash; Present</dt>
                <dd>Front End Developer</dd>
                <dd>Apptio</dd>
                <dd>
                    <p>Implemented functional prototype based on sketches, wireframes and visual designs and produced HTML5, CSS3 and JavaScript code. Collaborates with software developers to guide and promote the user experience of the product. Serves as front end expert and mentor.</p>
                    <ul>
                        <li>Developed application prototype using Zurb Foundation SCSS framework and PHP/Apache on an accelerated schedule</li>
                        <li>Integrated with Java Agile/Scrum software development team using Mercurial DVCS, Jetbrains IDEA and Gradle</li>
                        <li>Ensured the quality and success of UX and UI design for this groundbreaking new cloud SaaS product</li>
                        <li>Contributed to bringing an application to market that has become the fastest-selling product in company history and earned Apptio 10 new clients in its first two months</li>
                    </ul>
                </dd>

                <dt>June 2006 &ndash; October 2013</dt>
                <dd>Development Manager</dd>
                <dd>Sabre Hospitality Solutions</dd>
                <dd>
                    <p>Managed internal and external clients throughout project lifecycles. Served both as Lead Developer and Supervisor as needed to deliver website front end code. Participated as part of the company Innovation Team and built new product offerings with open source technologies.</p>
                    <ul>
                        <li>Co-designed an iterative and more collaborative workflow for website development that decreased overall timeline for new projects 25-40%</li>
                        <li>Responsible for a mix of 17 distributed and local front end developers that produced well over 100 award-winning websites</li>
                        <li>Innovated new products like a Facebook App for booking hotels, mobile/touch device booking engine prototype, route planner using Google Maps API and demo iOS App</li>
                    </ul>
                </dd>

                <dt>January 2005 &ndash; June 2006</dt>
                <dd>Senior Web Developer</dd>
                <dd>E-site Marketing</dd>
                <dd>
                    <p>Responsible for overall design execution of all website projects and established website framework that dramatically increased efficiency and standardized codebase.</p>
                    <ul>
                        <li>Utilized XML, XSLT and PHP to create framework for production of $10K to $250K websites; navigation and information architecture abstraction with separation of presentation and content</li>
                        <li>Developed reusable jQuery plugin code for utility functions such as asynchronous (AJAX) content loading, form validation and event tracking to standardize core functionality across multiple websites</li>
                        <li>Implemented and enforced standards and best practices for usability; used unobtrusive scripting, accessible content and navigation, and microformats, RDFa and schema.org to provide valuable experiences for all visitors</li>
                    </ul>
                </dd>

                <dt>June 2003 &ndash; January 2005</dt>
                <dd>Web Developer</dd>
                <dd>E-site Marketing</dd>
                <dd>
                    <p>Delivered high quality code for exceptionally fast-paced business under tight deadlines. Learned to develop, validate and process forms as well as other basic website maintenance.</p>
                    <ul>
                        <li>Generated booking revenue for small and boutique hotels building websites with HTML/CSS and PHP/MySQL from Photoshop designs to completion</li>
                        <li>Built resort activity planner allowing users to create and update profiles, share and save cart contents, search for vacation homes and plan itineraries</li>
                    </ul>
                </dd>

                <dt>2002 &ndash; 2007, Various</dt>
                <dd>Website Developer</dd>
                <dd>Freelance</dd>
                <dd>
                    <p>Coordinated, coded and managed smaller projects part time on request and referral basis, worked with freelance designers on larger projects.</p>
                    <ul>
                        <li>Design and develop websites using Apache/PHP/MySQL and ASP/SQL/IIS environments to establish online presences for local businesses</li>
                        <li>JavaScript coding for forms, animated banner ad creation and image preparation/correction for online use</li>
                        <li>Clients included Maryland Life Magazine, Girl Scouts of America, The Bay Net, Advantage Internet Marketing and Bang! Radio</li>
                    </ul>
                </dd>
            </dl>

            <h4>Education</h4>
            <dl>
                <dt>September 2001 &ndash; December 2002</dt>
                <dd>Carroll Community College</dd>
                <dd>Certificate in CIS Programming and Application Development</dd>
                <dd>Web Programming concentration</dd>
                <dd>
                    <ul>
                        <li>Obtained 3.90 GPA</li>
                        <li>Courses taken included Internet Scripting Languages, Advanced Web Page Authoring, Principles of Programming, Systems Analysis and Design and Principles of Computer Technology</li>
                    </ul>
                </dd>

                <dt>September 1994 &ndash; May 1998</dt>
                <dd>Western Maryland College</dd>
                <dd>Bachelor of Arts in Mathematics</dd>
                <dd>Secondary Education minor</dd>
                <dd>
                    <ul>
                        <li>Graduated cum laude with 3.41 GPA</li>
                        <li>Coursework consisted of Introduction to Structured Programming, Calculus, Complex Analysis, Logic and Probability</li>
                    </ul>
                </dd>
            </dl>
            <p><i>References will be provided upon request. Additional URLs, demos and code samples can also be made available. Please contact for more information.</i></p>
            <p><i>I normally try to save trees, but here's a semi-hidden <Link key="resume" href="/Tavis Tucker - resume.pdf" rel="nofollow">printable version</Link> for your convenience.</i></p>
            {
                /*
                    References
                    Mrs. Alix Locke, former manager and current Director of Solutions Development, Immersion Interactive
                    Mr. John Sears, Director of Interactive, Immersion Interactive
                    Mr. Arnold Dela Cruz, Visual Designer, Apptio
                    Mr. Tom Giannattasio, Founder, Clover
                    Contact details will be provided upon request.
                */
            }
        </article>
      </main>
      <Footer />
    </>
  )
}

import Head from "next/head"
import Link from "next/link"
import Header from "../components/header"
import Hero from "../components/hero"
import Article from "../components/article"
import Footer from "../components/footer"
import resumeImg from "../public/resume.jpg"

export default function Resume() {
  return (
    <>
      <Head><title>Resumé | tavis.me | Tavis Tucker</title></Head>
      <Hero imgSrc={resumeImg} />
      <Header />
      <main>
        <Article>
            <h3>Resumé</h3>

            <h4>About</h4>
            <p>Seasoned internet technology expert with 20+ years experience, specializing in frontend development, component-based architecture and design systems engineering.
                Technical leader, team builder and program manager with well-rounded skills covering the complete software engineering lifecycle.</p>

            <h4>Skills</h4>
            <ul>
                <li>React/Redux; component-based development</li>
                <li>ES6 JavaScript knowledge</li>
                <li>HTML5 and CSS3/SASS/SCSS/Less for responsive websites and applications</li>
                <li>Data visualization concepts with Victory, Highcharts and FusionCharts libraries</li>
                <li>Full-stack competence with PHP and MySQL experience</li>
                <li>REST API design; Postman and Swagger documentation</li>
                <li>Figma, InVision, and Adobe Creative Suite proficiency</li>
                <li>Program management, team leadership, and UX design</li>
            </ul>

            <h4>Accomplishments</h4>
            <ul>
                <li><Link key="tenable-io" href="https://www.tenable.com/products/tenable-sc">Tenable.sc</Link> -  
                    Accomplished major redesign of application and all UI components using design system tokens for first major version release of SecurityCenter in 8 years</li>
                <li><Link key="tenable-io" href="https://www.tenable.com/products/tenable-io">Tenable.io</Link> - 
                    Built dashboard and reporting software with React/Redux for ground-up redesign and rebuild of application. Helped establish design system for cross-product consistency and developer productivity</li>
                <li><b>Tenable Cloud</b> - Developed multiple features and new product offerings with ES6/CSS3/Handlebars and MVC framework for the company’s first cloud solution</li>
                <li><Link key="it-planning" href="http://www.apptio.com/applications/it-planning">Apptio IT Planning Foundation</Link> - 
                    Drove prototype development during design phase, frontend engineer during implementation of finished designs</li>
                <li><b>Facebook Booking Engine</b> - Created hotel availability search app with Facebook Developer API and generated over $250K in profit in under 2 years with 12:1 ROI</li>
            </ul>

            <h4>Experience</h4>
            <dl>
                <dt>May 2016 &ndash; December 2022</dt>
                <dd>Staff Software Engineer</dd>
                <dd>Tenable</dd>
                <dd>
                    <p>Led a small team in delivery of new features and core functionality for Tenable.io SaaS product, and Tenable.sc scrum team that worked on future major version release.</p>
                    <ul>
                        <li>Served as technical lead for platform UI group consisting of 5 other engineers</li>
                        <li>Built React components with Styled Components for in-house design system</li>
                        <li>Developed reusable shared visualization components for cross-team consumption</li>
                        <li>Helped bootstrap multiple new products including Dashboards, PCI ASV and MSSP</li>
                        <li>Automated e2e tests with Webdriver.IO and SauceLabs</li>
                    </ul>
                </dd>

                <dt>April 2015 &ndash; May 2016</dt>
                <dd>Senior Software Engineer</dd>
                <dd>Tenable</dd>
                <dd>
                    <p>Wrote frontend JavaScript with ES6 syntax, HTML5 and Less/CSS3 programming for Nessus and Nessus Cloud vulnerability scanner software.</p>
                    <ul>
                        <li>Collaborated with Director of Engineering and team members to iteratively enhance the product</li>
                        <li>Implemented password reset and plugin API key generation features</li>
                        <li>Developed HTML product documentation with parsed Asciidoc content and AJAX</li>
                        <li>Helped bootstrap multiple new products including Dashboards, PCI ASV and MSSP</li>
                        <li>Wrote automated test code with Chai BDD style and Node/Phantom/Casper</li>
                    </ul>
                </dd>

                <dt>October 2013 &ndash; March 2015</dt>
                <dd>Front End Developer</dd>
                <dd>Apptio</dd>
                <dd>
                    <p>Implemented functional prototype based on sketches, wireframes and visual designs; produced HTML5, CSS3 and JavaScript code for product.</p>
                    <ul>
                        <li>Developed application prototype with Zurb Foundation SCSS framework and PHP/Apache</li>
                        <li>Ensured the quality of UX and UI design for new cloud-based SaaS product</li>
                        <li>Contributed to application that earned Apptio 10 new clients in its first 2 months</li>
                    </ul>
                </dd>

                <dt>June 2006 &ndash; October 2013</dt>
                <dd>Development Manager</dd>
                <dd>Sabre Hospitality Solutions</dd>
                <dd>
                    <p>Managed internal and external clients throughout project lifecycles. Worked as Lead Developer, Supervisor and member of the company Innovation Team.</p>
                    <ul>
                        <li>Managed team of 17 frontend developers that produced over 100 award-winning websites</li>
                        <li>Engineered new products including Facebook App for room reservations, mobile booking engine prototype, route planner using Google Maps API and demo iOS App</li>
                        <li>Co-designed an iterative and more collaborative workflow for website development that decreased overall timeline for new projects 25-40%</li>
                    </ul>
                </dd>

                <dt>January 2005 &ndash; June 2006</dt>
                <dd>Senior Web Developer</dd>
                <dd>E-site Marketing</dd>
                <dd>
                    <p>Responsible for overall design execution of all website projects and established a website framework that dramatically increased efficiency and standardized the codebase.</p>
                    <ul>
                        <li>Utilized XML, XSLT and PHP to create framework for production of $10K to $250K websites; navigation and information architecture abstraction with separation of presentation and content</li>
                        <li>Developed reusable jQuery plugin code for asynchronous (AJAX) content loading, form validation and event tracking to standardize core functionality across multiple websites</li>
                        <li>Implemented and enforced standards and best practices for usability; used unobtrusive scripting, accessible content and navigation, and microformats, RDFa and schema.org</li>
                    </ul>
                </dd>

                <dt>June 2003 &ndash; January 2005</dt>
                <dd>Web Developer</dd>
                <dd>E-site Marketing</dd>
                <dd>
                    <p>Delivered high quality code for exceptionally fast-paced business under tight deadlines. Learned to develop, validate and process forms as well as other basic website maintenance.</p>
                    <ul>
                        <li>Generated booking revenue for small and boutique hotels building websites with HTML/CSS and PHP/MySQL from Photoshop designs to completion</li>
                        <li>Built resort activity planner that allowed users to create and update profiles, share and save cart contents, search for vacation homes and plan itineraries</li>
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
            <p><i>References will be provided upon request. Additional URLs, demos and code samples can also be made available. Please <Link key="contact" href="/contact">contact</Link> for more information.</i></p>
            <p><i>I normally try to save trees, but here&#39;s a semi-hidden <Link key="resume" href="/Tavis Tucker - resume.pdf" rel="nofollow">printable version</Link> for your convenience.</i></p>
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
        </Article>
      </main>
      <Footer />
    </>
  )
}

import { Html, Head, Main, NextScript } from "next/document"
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <meta name="description" content="This is tavis.me, the professional portfolio of Tavis Tucker, an internet geek currently living near Washington, DC.
            The intent is to showcase Tavis Tucker's skills, highlight project experience and give prospective clients or employers ways to get in touch." />
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B0SGJGWJ42"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-B0SGJGWJ42');
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
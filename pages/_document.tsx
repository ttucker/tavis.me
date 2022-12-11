import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="This is tavis.me, the professional portfolio of Tavis Tucker, an internet geek currently living near Washington, DC.
            The intent is to showcase Tavis Tucker's skills, highlight project experience and give prospective clients or employers ways to get in touch." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Cardo|PT+Sans" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
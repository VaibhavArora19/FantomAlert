import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-theme="forest">
      <Head>
       <link rel={"stylesheet"} href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" />  
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

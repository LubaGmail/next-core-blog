import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>Luba's Blog</title>
          <meta
            name='IT blog'
            content='On the bleeding age'
          />
          <link rel='icon' href='/images/icons8-comedy-36.png' type='image/x-icon' />
        </Head>
        <Component {...pageProps} />
    </>

  )
   
}

export default MyApp

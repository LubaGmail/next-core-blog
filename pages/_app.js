import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../comments/layout/layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>Zeus's Blog</title>
          <meta
            name='IT blog'
            content='On the bleeding age'
          />
          <link rel='icon' href='/images/icons8-comedy-36.png' type='image/x-icon' />
        </Head>
      
        <Layout>
          <Component {...pageProps} />
        </Layout>
             
    </>

  )
   
}

export default MyApp

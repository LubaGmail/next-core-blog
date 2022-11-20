import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
          <title>Zeus' Blog</title>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1'
          />
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

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Hero from '../comments/home/hero'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Featured posts</title>
        <meta 
          n ame='Featured posts'
          content='Most popular posts'
        />
      </Head>
      <Hero />
    </>
  ) 
}

export default HomePage

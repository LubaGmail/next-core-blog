import Head from 'next/head'
import FeaturedPosts from '../components/home/featured-posts'

import Hero from '../components/home/hero'

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
      <FeaturedPosts />
    </>
  ) 
}

export default HomePage

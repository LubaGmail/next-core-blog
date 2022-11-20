import Head from 'next/head'
import Image from 'next/image'
import styles from './hero.module.css'

const Hero = () => {
    return (
      <>
        <Head>
          <title>Featured posts</title>
          <meta 
            name='Featured posts'
            content='Most popular posts'
          />
        </Head>

            <section className={styles.hero}>
                <div className={styles.image}>
                    <Image
                      src='/images/alpaca.jpg'
                      height={300} width={300}
                      alt='picture'
                      priority
                    />
                </div>
                <h2>Hello! My name is Zeus and I am an alpaca</h2>
                <p>
                  I am a web developer who specializes in frontend frameworks
                </p>

            </section>
      </>
    )
  }
  
  export default Hero

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import ContactForm from '../components/contact/contact-form'

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Zeus at zeus@myblogs.net</title>
        <meta
          name='Contact info'
          content='ll@myblogs.net'
        />
      </Head>
      
      <ContactForm />
    </>
  )
}

export default ContactPage
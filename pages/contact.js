import Head from 'next/head'

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
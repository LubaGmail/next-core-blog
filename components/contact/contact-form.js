import Head from 'next/head'
import Image from 'next/image'

import styles from './contact-form.module.css'
const ContactForm = () => {
  return (
    <section className={styles.contact}>
        <h4>How Can I Help You?</h4>
        <form className={styles.form}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' name='email' required />  
                </div>
                <div className={styles.control}>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' id='name' name='name' required />  
                </div>
                <div className={styles.control}>
                    <label htmlFor='message'>Your Message</label>
                    <textarea id='message' name='message' rows='5'></textarea>  
                </div>
            </div>
              
            <div className={styles.actions}>
                <button>Send Message</button>      
            </div>  


        </form>
 
    </section>
  )
}

export default ContactForm
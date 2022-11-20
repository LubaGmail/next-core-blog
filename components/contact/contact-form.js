import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import styles from './contact-form.module.css'
import Notification from '../ui/notification'
import { APP_CLIENT_INTERNALS } from 'next/dist/shared/lib/constants'

const CONTACT_API = '/api/contact'

const ContactForm = () => {
    const [statusCode, setStatusCode] = useState()
    const [appStatus, setAppStatus] = useState()
    const [detail, setDetail] = useState()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (appStatus === 'success' || appStatus === 'error') {
          const timer = setTimeout(() => {
            setAppStatus(null)  
          }, 5000);
    
          return () => clearTimeout(timer);
        }
      }, [appStatus]);
    
    const handleReset = () => {
        setEmail(''); setName(''); setMessage('');
        setStatusCode(''); setAppStatus(''); setDetail('')
    }

    const handleSubmit = event => {
        event.preventDefault()
        const obj = {
            email: email,
            name: name,
            message: message
        }
        let notification;

        if (appStatus === 'pending') {
            notification = {
                status: 'pending',
                title: 'Sending message...',
                message: 'Your message is on its way!',
            };
        }
        sendRequest(obj)
    }

    const sendRequest = async obj => {
        fetch(CONTACT_API, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            setStatusCode(response.status)
            if (response.status === 201) {
                setEmail(''); setName(''); setMessage('')
                setDetail('Your message has been sent.')
            } else {
                setDetail(response.statusText)
            }
            return response.json()
        })
        .then(data => {
            setAppStatus(data.appStatus) 
            setDetail(data.detail)
        })
    }

    return (
        <section className={styles.contact}>
            <p className={styles.title}>How Can I Help You?</p>

            <form className={styles.form} onSubmit={handleSubmit} onReset={handleReset}>

                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input type='email' id='email' name='email' required minLength="6"
                            value={email} onChange={ (event => setEmail(event.target.value)) }
                        />  
                    </div>
                    <div className={styles.control}>
                        <label htmlFor='name'>Your Name</label>
                        <input type='text' id='name' name='name' required minLength="2"
                            value={name} onChange={ (event => setName(event.target.value)  ) }
                        />  
                    </div>
                    <div className={styles.control}>
                        <label htmlFor='message'>Your Message</label>
                        <textarea id='message' name='message' rows='5' required minLength="2"
                            value={message} onChange={ (event => setMessage(event.target.value)) }
                        ></textarea>  
                    </div>

                </div>

                <div className={styles.actions}>
                    <button type='submit'>Submit</button>  &nbsp;
                    <button type='reset'>Clear</button> 
                </div>  

            </form>
            { appStatus &&
               (
                    <Notification
                        statusCode={statusCode}
                        appStatus={appStatus}
                        detail={detail}
                    />
                )
            }
        </section>
    )
}

export default ContactForm
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import styles from './contact-form.module.css'

const CONTACT_API = '/api/contact'

const ContactForm = () => {
    const [statusCode, setStatusCode] = useState()
    const [appStatus, setAppStatus] = useState()
    const [detail, setDetail] = useState()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = event => {
        const obj = {
            email: email,
            name: name,
            message: message
        }

        event.preventDefault()
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

    const handleReset = () => {
        setEmail(''); setName(''); setMessage('');
        setStatusCode(''); setAppStatus(''); setDetail('')
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
                
                <div className={styles.messages}>
                    <div>statusCode: {statusCode} </div>
                    <div>appStatus: {appStatus} </div>
                    <div>Detail: {detail} </div>
                </div>

                <div className={styles.actions}>
                    <button type='submit'>Submit</button>  &nbsp;
                    <button type='reset'>Clear</button> 
                </div>  

            </form>
    
        </section>
    )
}

export default ContactForm
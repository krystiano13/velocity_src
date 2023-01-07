import React from 'react';
import '../styles/contact.css';

import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import About from '../components/About';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className='ContactWrapper'>
            <Hero subpage='contact' />
            <ContactForm />
            <About />
            <Footer />
        </div>
    )
}

export default Contact;
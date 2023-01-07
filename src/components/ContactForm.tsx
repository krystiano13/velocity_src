import React from 'react';
import '../styles/What.css';
import '../styles/contactForm.css';

const ContactForm = () => {
    return (
      <div className="ContactFormWrapper">
        <h2 className="WhatTitle">CONTACT US TODAY</h2>
        <h3 className="WhatSubtitle">
          This is some text inside of a div block.
        </h3>
        <p className="formText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.{" "}
        </p>
        <p className="formText">
          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
          commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus
          id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
        </p>
        <form>
            <input type='text' placeholder='Enter your name' />
            <input type='email' placeholder='Enter your email' />
            <textarea placeholder='Message' />
            <button type='submit'>SEND CARIER PIGEON</button>
        </form>
      </div>
    );
}

export default ContactForm;
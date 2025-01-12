import React from 'react';
import SocialIcons from './social';
import '../styles/contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-h1">Contact Kastleton Janitor creator!</h1>
        <p className="contact-p">Let's talk</p>
      </div>
      <div className="contact-links-section">
        <SocialIcons />
      </div>
    </div>
  );
}

export default Contact;

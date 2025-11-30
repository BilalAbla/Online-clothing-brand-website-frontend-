import React from 'react';
import contactImg from '../assets/contact.jpg';
import ContactForm from '../components/ContactForm';
import '../styles/ContactUs.css';

function ContactUs() {
  return (
    <section className="contact-page">
      <div className="contact-image">
        <img src={contactImg} alt="Contact Us" />
      </div>
      <ContactForm />
    </section>
  );
}

export default ContactUs;

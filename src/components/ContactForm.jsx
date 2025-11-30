import React from 'react';
import '../styles/ContactForm.css';

function ContactForm() {
  return (
    <form className="contact-form">
      <p>If you want to ask about anything, we're gladly listening!</p>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;

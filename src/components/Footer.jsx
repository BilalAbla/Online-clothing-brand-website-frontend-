import React from 'react';
import '../styles/Footer.css';
import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <p>© 2025 Reemie. All rights reserved.</p>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/reemie.shop?igsh=MXRqcjY3bW1qcmpueQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.tiktok.com/@reemie.shop?_r=1&_t=ZS-91phxK8L0MS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok size={24} />
        </a>
        <a
          href="https://www.facebook.com/share/1AJWrAQQ6M/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

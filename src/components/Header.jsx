import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <img src="/Reemielogo.jpg" alt="Brand Reemie logo" className="logo" />

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      <nav className={menuOpen ? 'nav-links mobile-open' : 'nav-links'}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop Now</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

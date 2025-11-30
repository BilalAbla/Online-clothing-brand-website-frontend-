import React from 'react';
import AboutMessage from '../components/AboutMessage';
import '../styles/AboutUs.css';
import brandImage from '../assets/brand.jpg';

function AboutUs() {
  return (
    <section className="about-page" style={{ backgroundImage: `url(${brandImage})` }}>
      <AboutMessage />
    </section>
  );
}

export default AboutUs;

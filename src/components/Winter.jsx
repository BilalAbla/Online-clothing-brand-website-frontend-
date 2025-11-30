import React from 'react';
import '../styles/Winter.css';
import winterImg from '../assets/winter.jpg';

function Winter() {
  return (
    <article
      className="winter"
      style={{ backgroundImage: `url(${winterImg})` }}
    >
      <p>COMING SOON — 2026 WINTER COLLECTION</p>
      
    </article>
  );
}

export default Winter;

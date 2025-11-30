import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SpecialOffers.css';

function SpecialOffers() {
  return (
    <article className="special-offers">
      <div className="offer-text">
        <p>CHECK OUR SPECIAL OFFERS</p>
        <button>
          <Link to="/shop">SHOP NOW</Link>
        </button>
      </div>
      <img src="/specialoffer.png" alt="Special Offer" />
    </article>
  );
}

export default SpecialOffers;

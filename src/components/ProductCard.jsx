import React from 'react';
import '../styles/ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} />
      <p className="product-name">{product.name}</p>
      <p className="product-price">{product.price}</p>
      <p className="product-color">{product.color}</p>
    </div>
  );
}

export default ProductCard;
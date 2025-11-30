import React, { useState } from 'react';
import ProductCard from './ProductCard';
import '../styles/Shop.css';

const products = [
  // Khimars
  { id: 1, category: 'khimar', img: '/Products/khimars/Blue2layer.png', name: '2 layers chiffon scarf with frills', price: '$8', color: 'Color: Blue' },
  { id: 2, category: 'khimar', img: '/Products/khimars/Bordeaux2layer.png', name: '2 layers chiffon scarf with frills', price: '$8', color: 'Color: Bordeaux' },
  { id: 3, category: 'khimar', img: '/Products/khimars/purple2layer (1).png', name: '2 layers chiffon scarf with frills', price: '$8', color: 'Color: Purple' },

  // Dresses
  { id: 4, category: 'dress', img: '/Products/Dresses/Abayabrown.png', name: 'Plain Abaya', price: '$20', color: 'Color: Brown' },
  { id: 5, category: 'dress', img: '/Products/Dresses/Abayaorange.png', name: 'Plain Abaya', price: '$20', color: 'Color: Orange' },
  { id: 6, category: 'dress', img: '/Products/Dresses/Abayapink (1).png', name: 'Plain Abaya', price: '$20', color: 'Color: Pink' },

  // Niqabs
  { id: 7, category: 'niqab', img: '/Products/Niqabs/Blue&Black.png', name: 'Classic Niqab', price: '$3', color: 'Color: Blue & Black' },
  { id: 8, category: 'niqab', img: '/Products/Niqabs/Grey&Black.png', name: 'Classic Niqab', price: '$3', color: 'Color: Grey & Black' },
  { id: 9, category: 'niqab', img: '/Products/Niqabs/NiqabBlue.png', name: 'Classic Niqab', price: '$3', color: 'Color: Blue' },

  // Burkinis
  { id: 10, category: 'burkini', img: '/Products/Burkinis/BB.png', name: 'Burkini', price: '$20', color: 'Color: Blue' },
  { id: 11, category: 'burkini', img: '/Products/Burkinis/BBB.png', name: 'ButterFly Burkini', price: '$20', color: 'Color: Blue' },
  { id: 12, category: 'burkini', img: '/Products/Burkinis/BBG.png', name: 'ButterFly Burkini', price: '$20', color: 'Color: Green' },

  // Special Offers
  { id: 13, category: 'special', img: '/Products/Offers/2layersBlue.png', name: 'Limited Set', price: '$10', color: 'Color: Blue' },
  { id: 14, category: 'special', img: '/Products/Offers/2layersGreen.png', name: 'Limited Set', price: '$10', color: 'Color: Green' },
  { id: 15, category: 'special', img: '/Products/Offers/2layersPurple.png', name: 'Limited Set', price: '$10', color: 'Color: Purple' },
];

function Shop() {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <section className="shop-section">
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('khimar')}>Khimars</button>
        <button onClick={() => setFilter('dress')}>Dresses</button>
        <button onClick={() => setFilter('niqab')}>Niqabs</button>
        <button onClick={() => setFilter('burkini')}>Burkinis</button>
        <button onClick={() => setFilter('special')}>Special Offers</button>
      </div>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Shop;

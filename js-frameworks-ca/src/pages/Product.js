import React from 'react';
import { Link } from 'react-router-dom';
import '../css/buttons.css';

function Product({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <Link to={`/Product/${product.id}`} className="view-button button-hover">View Product</Link>
    </div>
  );
}

export default Product;

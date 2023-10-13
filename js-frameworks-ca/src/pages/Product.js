import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <Link to={`/Product/${product.id}`}>View Product</Link>
    </div>
  );
}

export default Product;

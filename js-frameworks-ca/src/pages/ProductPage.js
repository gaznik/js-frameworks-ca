import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddToCartButton from '../CartButton';
import '../css/ProductPage.css';
import { Link } from 'react-router-dom';

function ProductPage({ onAddToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    }

    fetchProductDetails();
  }, [id]);

  return (
    <div className="product-container"> 
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <div>
          <h1 className="product-title">{product.title}</h1>
          <img src={product.imageUrl} alt={product.title} className="product-image" />
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price.toFixed(2)}</p>
          <p>Discounted Price: ${product.discountedPrice.toFixed(2)}</p>
          <AddToCartButton product={product} onAddToCart={onAddToCart} className="add-to-cart-button" />
        </div>
      ) : (
        <p>Product not found.</p>
      )}
      <Link to="/">Shop more</Link>
    </div>
  );
  
}

export default ProductPage;

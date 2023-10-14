import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddToCartButton from '../CartButton';

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
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <div>
          <h1>{product.title}</h1>
          <img src={product.imageUrl} alt={product.title} />
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Discounted Price: ${product.discountedPrice.toFixed(2)}</p>
          <AddToCartButton product={product} onAddToCart={onAddToCart} />
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}

export default ProductPage;

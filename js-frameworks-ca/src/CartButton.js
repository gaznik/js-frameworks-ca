import React from 'react';

function AddToCartButton({ product, onAddToCart }) {
  const addToCart = () => {
    if (product) {
      onAddToCart(product);
    }
  };

  return (
    <button onClick={addToCart}>Add to Cart</button>
  );
}

export default AddToCartButton;

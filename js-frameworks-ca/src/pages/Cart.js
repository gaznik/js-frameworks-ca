import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ cartItems, removeItem, clearCart }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length > 0) {
        clearCart();
        navigate('/checkout-success');
    }
  };

  return (
    <div>
      <h1>Cart Page</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price.toFixed(2)}
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default Cart;

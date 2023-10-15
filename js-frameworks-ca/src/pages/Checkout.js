import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Checkout.css'

function Cart({ cartItems, removeItem, clearCart }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length > 0) {
        clearCart();
        navigate('/checkout-success');
    }
  };

  return (
    <div className="cart-container">
      <h1 className="page-title">My Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li className="cart-item" key={index}>
            {item.title} - ${item.price.toFixed(2)}
            <button onClick={() => removeItem(item)} className="remove-button">Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</p>
      <button onClick={handleCheckout} className="checkout-button button-hover">Checkout</button>
    </div>
  );
}

export default Cart;

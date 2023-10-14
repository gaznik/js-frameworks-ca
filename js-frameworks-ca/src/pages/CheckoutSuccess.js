// CheckoutSuccess.js
import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutSuccess({ clearCart }) {
  return (
    <div>
      <h1>Order Successful</h1>
      <p>Your order has been placed</p>
      <Link to="/">Back to the shop</Link>
    </div>
  );
}

export default CheckoutSuccess;

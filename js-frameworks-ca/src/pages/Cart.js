import React from 'react';

function Cart({ cartItems }) {
  return (
    <div>
      <h1>Cart Page</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
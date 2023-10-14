import React from 'react';

function Cart({ cartItems }) {
  const totalSum = cartItems.reduce((sum, item) => sum + item.price, 0);

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
      <p>Total: ${totalSum.toFixed(2)}</p>
    </div>
  );
}

export default Cart;

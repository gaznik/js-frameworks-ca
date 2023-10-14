import React from 'react';

function Cart({ cartItems, removeItem }) {
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
    </div>
  );
}

export default Cart;

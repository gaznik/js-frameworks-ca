import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import './css/Header.css';

function Header({ cartItemCount }) {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ProductPage">Product</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link> 
          </li>
        </ul>
      </nav>
      <div className="cart-icon-container">
        <CartIcon cartItemCount={cartItemCount} />
      </div>
    </header>
  );
}

export default Header;

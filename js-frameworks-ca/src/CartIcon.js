import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './css/CartIcon.css';

function CartIcon({ cartItemCount }) {
  return (
    <div className="cart-icon">
      <Link to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        {cartItemCount > 0 && <div className="item-count">{cartItemCount}</div>}
      </Link>
    </div>
  );
}

export default CartIcon;
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CartIcon({ itemCount }) {
  return (
    <div className="cart-icon">
      <FontAwesomeIcon icon="shopping-cart" />
      {itemCount > 0 && (
        <div className="cart-item-count">
          {itemCount}
        </div>
      )}
    </div>
  );
}

export default CartIcon;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Product from './Product';
import Cart from './Cart';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Product">Product</Link>
              </li>
              <li>
                <Link to="/Cart">Cart</Link>
              </li>
              <li>
                <Link to="/Checkout">Checkout</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>      
            <Route path="/" exact component={Home} />
            <Route path="/Product" component={Product} />
            <Route path="/Cart" component={Cart} />
            <Route path="/Checkout" component={Checkout} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
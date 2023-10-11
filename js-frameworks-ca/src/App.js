import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

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
                <Link to="/product">Product</Link> 
              </li>
              <li>
                <Link to="/cart">Cart</Link> 
              </li>
              <li>
                <Link to="/checkout">Checkout</Link> 
              </li>
            </ul>
          </nav>
        </header>
        <Routes>      
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} /> 
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/checkout" element={<Checkout />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './Layout';
import Header from './Header';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  const [cart, setCart] = useState([]); 

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert('Product added to the cart.'); 
  };

  return (
    <Router>
      <Header cartItemCount={cart.length} /> 
      <Layout>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage onAddToCart={addToCart} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;

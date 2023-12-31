// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './Layout';
import Header from './Header'; 
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Checkout from './pages/Checkout';
import CheckoutSuccess from './pages/CheckoutSuccess';
import Contact from './pages/Contact';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert('Product added to the cart.');
  };

  const removeItem = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item !== itemToRemove);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const headerComponent = <Header cartItemCount={cart.length} />; 

  return (
    <Router>
      <Layout header={headerComponent}> 
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage onAddToCart={addToCart} />} />
            <Route path="/checkout" element={<Checkout cartItems={cart} removeItem={removeItem} clearCart={clearCart} />} />
            <Route path="/checkout-success" element={<CheckoutSuccess clearCart={clearCart} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;

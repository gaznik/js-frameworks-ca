import React, { useState, useEffect } from 'react';
import Product from './Product';
import SearchBar from '../SearchBar';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://api.noroff.dev/api/v1/online-shop/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const handleSearchInputChange = (input) => {
    setSearchInput(input);

    
    const filtered = input
      ? products.filter((product) =>
          product.title.toLowerCase().includes(input.toLowerCase())
        )
      : products;

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h1 className="page-title">Products</h1>
      <SearchBar onSearch={handleSearchInputChange} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))
          ) : (
            <p>No matching products found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;

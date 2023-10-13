import React, { useState, useEffect } from 'react';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://api.noroff.dev/api/v1/online-shop');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div>
                <img
                  src={product.imageUrl} 
                  alt={product.title}
                  style={{ maxWidth: '100px' }} 
                />
              </div>
              <div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Price: {product.price} USD</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;

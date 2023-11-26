// App.js
import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';


const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    // Add more products
  ];

  const addToCart = product => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>My E-Commerce Store</h1>
      <div>
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
};

export default App;

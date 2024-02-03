import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import products from './data';
import './styles.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <div className="container">
        <Navbar cartItemCount={cartItems.length} setFilteredProducts={setFilteredProducts} products={products} />
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} products={filteredProducts.length > 0 ? filteredProducts : products} />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

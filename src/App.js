import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import products from './data';
import './styles.css';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => {
  // Initialize cartItems as an empty array
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Ensure cartItems is an array before using spread operator
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <div className="container">
        <Navbar cartItemCount={cartItems.length} products={products} />
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Hero />
                <ProductList addToCart={addToCart} />
              </React.Fragment>
            }
          />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

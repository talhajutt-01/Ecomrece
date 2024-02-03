import React, { useState } from 'react';
import { Routes, Route, } from 'react-router-dom';
import Product from './Product';
import ProductDetails from './ProductDetails';
import products from '../data';

const pageSize = 8;

const ProductList = ({ addToCart }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentProducts = products.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <div className="product-list">
            {currentProducts.map((product) => (
              <Product key={product.id} {...product} addToCart={addToCart} />
            ))}

            <div className="pagination">
              <button className='btn btn-outline-primary' onClick={handlePrevPage} disabled={currentPage === 1}>
                Prev
              </button>
              <span>{`Page ${currentPage}`}</span>
              <button className='btn btn-outline-primary' onClick={handleNextPage} disabled={endIndex >= products.length}>
                Next
              </button>
            </div>
          </div>
        }
      />
      <Route
        path="/product/:id"
        element={({ params }) => {
          const selectedProduct = products.find((product) => product.id === Number(params.id));
          return <ProductDetails {...selectedProduct} addToCart={addToCart} />;
        }}
      />
    </Routes>
  );
};

export default ProductList;

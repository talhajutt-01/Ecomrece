// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  const { title, price, img, info } = product;

  return (
    <div>
      <h2>{title}</h2>
      <p>${price.toFixed(2)}</p>
      <img src={`${process.env.PUBLIC_URL}/${img}`} alt={title} />
      <p>{info}</p>
    </div>
  );
};

export default ProductDetail;

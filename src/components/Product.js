import React, {useState} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ModalComponent from './Modal';

const Product = ({ id, title, price, img, addToCart }) => {
  const [showPopup, setShowPopup] = useState(false);
  

  const handleAddToCart = () => {
    addToCart({ id, title, price, img });
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

 

  return (
    <div className="product">
      <Link to={`/product/${id}`} className="product-link">
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>${price.toFixed(2)}</p>
      </Link>

      <button onClick={handleAddToCart} type="button" className="btn btn-outline-success">
        <FaShoppingCart /> Add to Cart
      </button>

      <ModalComponent
        showModal={showPopup}
        handleClose={handlePopupClose}
        itemName={title}
        itemPrice={price}
      />

     
    </div>
  );
};

export default Product;

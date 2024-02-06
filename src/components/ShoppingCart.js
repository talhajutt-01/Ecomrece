import React from 'react';

const ShoppingCart = ({ cartItems, removeFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="shopping-cart card text-center ">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}{' '}
                <button className='btn btn-primary' onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="card-footer text-body-secondary">
          <p>Total: ${calculateTotal()}</p>
          <p>Proceed to online payment:</p>
          <a href="https://your-payment-url.com" target="_blank" rel="noopener noreferrer">
            Pay Now
          </a>
          </div>
        </div>
      )}
    </div>

    
  );
};

export default ShoppingCart;

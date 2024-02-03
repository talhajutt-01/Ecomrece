import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ModalComponent = ({ showModal, handleClose, itemName, itemPrice }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Item Added to Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{`"${itemName}" has been added to the cart.`}</p>
        <p>{`Price: $${itemPrice.toFixed(2)}`}</p>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/cart">
          <Button variant="primary" onClick={handleClose}>
            Go to Cart
          </Button>
        </Link>
        <Button variant="secondary" onClick={handleClose}>
          Continue Shopping
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;

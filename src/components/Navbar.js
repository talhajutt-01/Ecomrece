import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItemCount, }) => {
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="border border-warning rounded text-uppercase fw-bold text-decoration-none text-dark px-1">
            <img className="me-1" src={process.env.PUBLIC_URL + "/logo.svg"} alt="Phone's Store" />
            Phone's Store
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Cart {cartItemCount > 0 && <span className="badge bg-danger">{cartItemCount}</span>}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

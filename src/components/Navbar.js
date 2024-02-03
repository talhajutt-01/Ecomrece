import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItemCount, products, setFilteredProducts }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter products based on the search query
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    // Set filtered products in the parent component
    setFilteredProducts(filteredProducts);
  };

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
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearch}
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

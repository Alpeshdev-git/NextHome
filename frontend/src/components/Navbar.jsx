import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../css/navbar.css";

export default function Navbar() {
  const location = useLocation(); 
  const isLoginPage = location.pathname === "/login";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">NextHome</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pg-listings">PG Listings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book-pg">Book PG</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              {isLoginPage ? (
                <Link className="nav-link btn btn-primary text-white ms-2" to="/">Register</Link>
              ) : (
                <Link className="nav-link btn btn-primary text-white ms-2" to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => (
  <header>
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/about" className="navbar-item">About</Link>
          <Link to="/products" className="navbar-item">Products</Link>
        </div>
      </div>
    </nav>
  </header>
)
export default Navbar
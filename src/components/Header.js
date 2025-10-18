import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => (
  <header className="header">
    <div className="logo">👟 Shoe Haven</div>
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/products">Shop</Link>
      <Link to="/cart" className="cart-link">
        🛒 <span className="cart-count">{cartCount}</span>
      </Link>
    </nav>
  </header>
  
);

export default Header;

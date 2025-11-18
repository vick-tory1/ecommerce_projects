import { Link } from "react-router-dom";
import React from "react";
import "../css/Navbar.css";
import { useCart } from "../contexts/CartContext";

function NavBar() {
  const { cartItems } = useCart();
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="brand-link">
          🦁 Tory Adams Wears
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/shop" className="nav-link">Shop</Link>
        <Link to="/categories" className="nav-link">Categories</Link>
        <Link to="/contact-us" className="nav-link">Contact Us</Link>
        <Link to="/about-us" className="nav-link">About Us</Link>
        <Link to="/cart" className="nav-link">
        Cart { cartItems.length > 0 && (<span className="cart-count">{ cartItems.reduce((s,i)=>s + i.quantity,0)}</span>)}
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

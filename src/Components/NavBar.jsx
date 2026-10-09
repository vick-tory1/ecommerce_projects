import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import "../css/Navbar.css";
import { useCart } from "../contexts/CartContext";

function NavBar() {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={`navbar${menuOpen ? " menu-open" : ""}`} aria-label="Main navigation">
      <div className="nav-brand">
        <Link to="/" className="brand-link">
          🦁 Tory Adams Wears
        </Link>
      </div>
      <button
        className="nav-menu-toggle"
        type="button"
        aria-controls="ecommerce-navigation-links"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className="navbar-links" id="ecommerce-navigation-links">
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/shop" className="nav-link" onClick={() => setMenuOpen(false)}>Shop</Link>
        <Link to="/categories" className="nav-link" onClick={() => setMenuOpen(false)}>Categories</Link>
        <Link to="/contact-us" className="nav-link" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        <Link to="/about-us" className="nav-link" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/cart" className="nav-link" onClick={() => setMenuOpen(false)}>
        Cart { cartItems.length > 0 && (<span className="cart-count">{ cartItems.reduce((s,i)=>  s + i.quantity , 0)}</span>)}
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

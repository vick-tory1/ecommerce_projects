// import React from "react";
// export default function Footer(){
//   return (
//     <footer style={{textAlign:"center",padding:"1rem"}}>
//       <small>© {new Date().getFullYear()} Shoply — Demo ecommerce app using DummyJSON API</small>
//     </footer>
//   )
// }

import React from "react";
import "../css/Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">

        {/* Latest Deals & Product Updates Section */}
        <div className="footer-info">
          <h2>Latest Deals & Offers</h2>
          <p>
            <Link to="#">Thursday, 13th Nov 2025</Link><br />
            🔥 Black Friday Preview: Up to 60% off on electronics and fashion!
          </p>
          <p>
            <Link to="#">Wednesday, 12th Nov 2025</Link><br />
            New arrivals: Explore our 2025 Smart Home Collection.
          </p>
          <p>
            <Link to="#">Tuesday, 11th Nov 2025</Link><br />
            Special offer: Free shipping on all orders above ₦20,000.
          </p>
        </div>

        {/* Connect With Us Section */}
        <div className="footer-info">
          <h2>Connect With Us</h2>
          <div className="social">
            <FaFacebookF className="social-icon" />
            <p>Facebook <br /> <Link target="_blank" rel="noopener noreferrer" to="https://web.facebook.com/" >+120,000 Fans</Link></p>
          </div>
          <div className="social">
            <FaTwitter className="social-icon" />
            <p>Twitter <br /> <Link target="_blank" rel="noopener noreferrer" to="https://x.com/">+95,000 Followers</Link></p>
          </div>
          <div className="social">
            <FaInstagram className="social-icon" />
            <p>Instagram <br /> <Link target="_blank" rel="noopener noreferrer" to="https://www.instagram.com/vicktory.ekpe">+150,000 Followers</Link></p>
          </div>
        </div>

        {/* Customer Support / Business Hours Section */}
        <div className="footer-info">
          <h2>Customer Support</h2>
          <ul>
            <li>Monday: <Link to="#">9am - 8pm</Link></li>
            <li>Tuesday: <Link to="#">9am - 8pm</Link></li>
            <li>Wednesday: <Link to="#">9am - 8pm</Link></li>
            <li>Thursday: <Link to="#">9am - 8pm</Link></li>
            <li>Friday: <Link to="#">9am - 8pm</Link></li>
            <li>Saturday: <Link to="#">10am - 6pm</Link></li>
            <li>Sunday: <Link to="#">Closed</Link></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-info">
          <h2>Contact Us</h2>
          <p>
            <strong>Office Address:</strong><br />
            12 Commerce Avenue, Market City, Lagos, Nigeria
          </p>
          <p>
            <strong>Email:</strong><br />
            <a href="mailto:support@toryadams@gmail.com">support@toryadams@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong><br />
            +234 805 792 0012, +234 815 681 3973
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2025 | Thank you for shopping with <strong>Tory Adams Wears</strong> | Designed by <a href="#">Tory Adams Ekpe 💚</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

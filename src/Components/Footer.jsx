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

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">

        {/* Latest Deals & Product Updates Section */}
        <div className="footer-info">
          <h2>Latest Deals & Offers</h2>
          <p>
            <a href="#">Thursday, 13th Nov 2025</a><br />
            🔥 Black Friday Preview: Up to 60% off on electronics and fashion!
          </p>
          <p>
            <a href="#">Wednesday, 12th Nov 2025</a><br />
            New arrivals: Explore our 2025 Smart Home Collection.
          </p>
          <p>
            <a href="#">Tuesday, 11th Nov 2025</a><br />
            Special offer: Free shipping on all orders above ₦20,000.
          </p>
        </div>

        {/* Connect With Us Section */}
        <div className="footer-info">
          <h2>Connect With Us</h2>
          <div className="social">
            <FaFacebookF className="social-icon" />
            <p>Facebook <br /> <a href="#">+120,000 Fans</a></p>
          </div>
          <div className="social">
            <FaTwitter className="social-icon" />
            <p>Twitter <br /> <a href="#">+95,000 Followers</a></p>
          </div>
          <div className="social">
            <FaInstagram className="social-icon" />
            <p>Instagram <br /> <a href="#">+150,000 Followers</a></p>
          </div>
        </div>

        {/* Customer Support / Business Hours Section */}
        <div className="footer-info">
          <h2>Customer Support</h2>
          <ul>
            <li>Monday: <a href="#">9am - 8pm</a></li>
            <li>Tuesday: <a href="#">9am - 8pm</a></li>
            <li>Wednesday: <a href="#">9am - 8pm</a></li>
            <li>Thursday: <a href="#">9am - 8pm</a></li>
            <li>Friday: <a href="#">9am - 8pm</a></li>
            <li>Saturday: <a href="#">10am - 6pm</a></li>
            <li>Sunday: <a href="#">Closed</a></li>
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
            <a href="mailto:support@shoply.ng">support@shoply.ng</a>
          </p>
          <p>
            <strong>Phone:</strong><br />
            +234 805 123 4567, +234 813 987 6543
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2025 | Thank you for shopping with <strong>Shoply</strong> | Designed by <a href="#">Tory Adams Ekpe 🖤</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

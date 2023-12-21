// footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/terms">Terms and Conditions</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
      </div>
      
      <div className="footer-social">
        {/* Add social media icons and links */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
      <div className="footer-text">
        <p>&copy; 2023 happyTails. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

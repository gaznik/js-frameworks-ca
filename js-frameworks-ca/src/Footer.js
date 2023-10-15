import React from 'react';
import { Link } from 'react-router-dom';
import './css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; Shopshopshop</p>
      <Link to="/contact">Contact Us</Link>
    </footer>
  );
}

export default Footer;

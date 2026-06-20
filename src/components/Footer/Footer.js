import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-text">
        &copy; {new Date().getFullYear()} VibeCart &mdash; All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

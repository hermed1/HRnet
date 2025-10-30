import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">&copy; {new Date().getFullYear()} HRnet. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

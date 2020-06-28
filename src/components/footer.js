import React from 'react';
import { IconContext } from 'react-icons';
import { FaHeart } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p className="lead text-center mb-0 p-4">
          Developed by{' '}
          <IconContext.Provider value={{ color: 'red', className: '' }}>
            <FaHeart />
          </IconContext.Provider>{' '}
          <a
            href="https://facebook.com/emon.hossain.7475/"
            target="_blank"
            style={{ textDecoration: 'none' }}
            rel="noopener noreferrer"
          >
            Emon Hossain
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

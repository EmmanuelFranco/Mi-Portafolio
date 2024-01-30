import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white text-left py-4 relative">
      <h1 className="bg-gradient-to-r text-3xl font-bold ml-12 text-shadow-lg">Mi Portafolio</h1>
      <div className="absolute top-0 right-0 mt-4 mr-4 flex space-x-4">
        <a href="https://www.facebook.com/emmanuelfranco.107" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
        </a>
        <a href="https://www.instagram.com/efranco107/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
        </a>
        <a href="https://www.linkedin.com/in/emmanuel-franco-marketing-desarrollo/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
        </a>
      </div>
    </header>
  );
};

export default Header;

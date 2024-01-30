import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white text-left py-2 md:py-6 lg:py-4 px-4 md:px-8 lg:px-12 flex items-center justify-between">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-shadow-lg">Mi Portafolio</h1>
      <div className="flex space-x-4">
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

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">PinturaPro</a>
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Sobre Nós</a></li>
          <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Serviços</a></li>
          <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfólio</a></li>
          <li><a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Depoimentos</a></li>
          <li><a href="#areas" onClick={() => setIsMenuOpen(false)}>Área de Atuação</a></li>
          <li><a href="#contacts" onClick={() => setIsMenuOpen(false)}>Contatos</a></li>
        </ul>
        <div className="navbar-button">
          <a href="#quote" className="btn-quote" onClick={() => setIsMenuOpen(false)}>Orçamento Rápido</a>
        </div>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </div>
    </nav>
  );
};

export default Navbar;

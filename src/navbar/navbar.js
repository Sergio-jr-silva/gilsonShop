import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const whatsappNumber = "5581988835006";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" >
        <a href="#home">GS Pinturas & Serviços</a>
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre Nós</a></li>
          <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Serviços</a></li>
          <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfólio</a></li>
          <li><a href="#Depoimentos" onClick={() => setIsMenuOpen(false)}>Depoimentos</a></li>
          <li><a href="#areas" onClick={() => setIsMenuOpen(false)}>Área de Atuação</a></li>
          <li><a href="#footer" onClick={() => setIsMenuOpen(false)}>Contatos</a></li>
        </ul>
        <div className="navbar-button">
          <a href={`https://wa.me/${whatsappNumber}?text=Olá Tudo bem,%20gostaria%20de%20Realizar%20um%20orçamento!`} className="btn-quote" onClick={() => setIsMenuOpen(false)} >Orçamento Rápido</a>
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

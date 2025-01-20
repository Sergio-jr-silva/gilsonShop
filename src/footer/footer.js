import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-container">
        <div className="footer-section">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#Home">Início</a></li>
            <li><a href="#sobre">Sobre Nós</a></li>
            <li><a href="#Depoimentos">Depoimentos</a></li>
            <li><a href="#contatos">Contatos</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contatos</h4>
          <p>Telefone: <a href="tel:+5511999999999">(11) 99999-9999</a></p>
          <p>Email: <a href="mailto:contato@pinturapro.com">contato@pinturapro.com</a></p>
        </div>
        <div className="footer-section social">
          <h4>Siga-nos</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" />
            </a>
            <a 
              href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços!" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 GS Pinturas & Sérviços. Todos os direitos reservados.</p>
        <p>&copy; Desenvolvido por <a href='https://www.linkedin.com/in/sergio-silvajr/' className='footer-bottom'>Sérgio Silva.</a></p>
      </div>
    </footer>
  );
};

export default Footer;

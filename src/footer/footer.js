import React from 'react';
import './Footer.css';
const whatsappNumber = "5581988835006";
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
          <p>Telefone: <a href={`https://wa.me/${whatsappNumber}?text=Olá Tudo bem,%20gostaria%20de%20Realizar%20um%20orçamento!`}   target="_blank" 
              rel="noopener noreferrer">81 98883-5006</a></p>
          <p>Email: <a href="mailto:contato@pinturapro.com">gilsonsoaresdesouza650@gmail.com</a></p>
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
              href={`https://wa.me/${whatsappNumber}?text=Olá Tudo bem,%20gostaria%20de%20Realizar%20um%20orçamento!`} 
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

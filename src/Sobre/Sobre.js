import React from 'react';
import './Sobre.css';

const Sobre = () => {
  return (
    <section id="sobre" className="sobre-section">
      <div className="sobre-container">
        <h2>Sobre Nós</h2>
        <p>
          A <strong>GS Pinturas & Serviços</strong> é uma empresa dedicada a transformar espaços com cores e acabamentos impecáveis. 
          Com anos de experiência no mercado, nossa missão é oferecer um serviço de qualidade, priorizando a satisfação 
          e o conforto de nossos clientes.
        </p>
        <div className="sobre-points">
          <div className="point">
            <h3>Experiência</h3>
            <p>Mais de 10 anos trazendo cor e vida para residências e espaços comerciais.</p>
          </div>
          <div className="point">
            <h3>Qualidade</h3>
            <p>Utilizamos materiais de primeira linha para garantir durabilidade e beleza.</p>
          </div>
          <div className="point">
            <h3>Confiança</h3>
            <p>Clientes satisfeitos são nossa maior prioridade.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;

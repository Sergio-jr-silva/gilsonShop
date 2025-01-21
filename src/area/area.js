import React from 'react';
import './area.css';
import mapa from './mapa.png'

const Mapa = () => {
  return (
    <section className="mapa-section" id="mapa">
      <div className="mapa-container">
        <h2>Área de Atuação</h2>
        <p>Atendemos Recife e região. Confira nossa área de cobertura no mapa abaixo:</p>
        <div className="mapa-image">
          <img 
            src= {mapa} 
            alt="Mapa de Recife e região" 
          />
        </div>
      </div>
    </section>
  );
};

export default Mapa;

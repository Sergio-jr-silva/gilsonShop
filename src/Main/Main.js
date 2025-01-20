import React from 'react';
import './Main.css';
import paintingImage from './ImgMain.jpg'
const Main = () => {
  return (
    <main className="main-section">
      <div className="main-content">
        <div className="main-text">
          <h1>Transforme Suas Paredes Com Perfeição</h1>
          <p>
            Na <strong>PinturaPro</strong>, somos especialistas em pintura residencial e comercial. 
            Oferecemos serviços de alta qualidade, com atenção aos detalhes e acabamento impecável. 
            Deixe seus espaços mais bonitos e acolhedores com as cores que você ama.
          </p>
          <a href="#quote" className="btn-main">Solicitar Orçamento</a>
        </div>
        <div className="main-image">
          <img src={paintingImage} alt="Serviço de pintura" />
        </div>
      </div>
    </main>
  );
};

export default Main;

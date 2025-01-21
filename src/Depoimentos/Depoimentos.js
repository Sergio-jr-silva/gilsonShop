import React from 'react';
import Slider from 'react-slick';
import './Depoimentos.css';
import img1 from './imgs/img1.jpg';
import img2 from './imgs/img2.jpg';
import img3 from './imgs/img3.webp';

const Depoimentos = () => {
  const depoimentos = [
    {
      image: img1, // Substitua pelo caminho das imagens reais
      name: 'Carlos Silva',
      text: 'Excelente serviço! Minhas paredes nunca pareceram tão bonitas e bem cuidadas.',
    },
    {
      image: img2,
      name: 'Maria Oliveira',
      text: 'A equipe foi super profissional e entregou tudo dentro do prazo. Recomendo muito!',
    },
    {
      image: img3,
      name: 'Joana Souza',
      text: 'Adorei o resultado final! Ficou melhor do que eu imaginava.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="Depoimentos" className="depoimentos-section">
      <div className="depoimentos-container">
        <h2>Depoimentos</h2>
        <Slider {...settings}>
          {depoimentos.map((depoimento, index) => (
            <div key={index} className="depoimento-card">
              <img src={depoimento.image} alt={`Depoimento de ${depoimento.name}`} />
              <p className="depoimento-text">"{depoimento.text}"</p>
              <p className="depoimento-name">- {depoimento.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Depoimentos;

import React from 'react';
import Container from '../../Container';
import linhaPontilhada from "../../../assets/Images/Olinda/dashed-border.png";
import igrejaSe from "../../../assets/Images/Olinda/igreja-se.svg";
import miranteSe from "../../../assets/Images/Olinda/mirante-se.svg";
import mercadosArtesanato from "../../../assets/Images/Olinda/mercados-artesanato.svg";
import igrejaCarmo from "../../../assets/Images/Olinda/igreja-carmo.svg";


import './fotos-cidades.css';

const FotosCidades: React.FC = () => {
  return (
      <div className='main-fotos-cidades'>
        <img id='borda-dashed' src={linhaPontilhada} alt="" />
        <h2>Lugares interessantes para conhecer</h2>
        <div className='container-fotos-cidades'>
          <div>
            <img src={igrejaSe} alt="Igreja da Sé" />
            <h5>Igreja da Sé</h5>
          </div>
          <div>
            <img src={miranteSe} alt="Mirante da Sé" />
            <h5>Mirante da Sé</h5>
          </div>
          <div>
            <img src={mercadosArtesanato} alt="Mercados de Artesanato" />
            <h5>Mercados de Artesanato</h5>
          </div>
          <div>
            <img src={igrejaCarmo} alt="Igreja do Carmo" />
            <h5>Igreja do Carmo</h5>
          </div>
        </div>
      </div>
  );
}

export default FotosCidades;
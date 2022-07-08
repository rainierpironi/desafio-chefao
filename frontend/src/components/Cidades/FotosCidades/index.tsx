import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import igrejaSe from "../../../assets/Images/Cidades/Olinda/igreja-se.svg";
import miranteSe from "../../../assets/Images/Cidades/Olinda/mirante-se.svg";
import mercadosArtesanato from "../../../assets/Images/Cidades/Olinda/mercados-artesanato.svg";
import igrejaCarmo from "../../../assets/Images/Cidades/Olinda/igreja-carmo.svg";


import './fotos-cidades.css';

const FotosCidades: React.FC = () => {
  return (
    <Fragment>
      <div className='borda-dashed'>
        <img id='borda-dashed' src={linhaPontilhada} alt="linha amarela pontilhada" />
      </div>
      <div className='main-fotos-cidades'>
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
    </Fragment>

  );
}

export default FotosCidades;
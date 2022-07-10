import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import lugarUm from "../../../assets/Images/Cidades/Rio-de-janeiro/cristo.png";
import lugarDois from "../../../assets/Images/Cidades/Rio-de-janeiro/feira-cristovao.png";
import lugarTres from "../../../assets/Images/Cidades/Rio-de-janeiro/forte-copacabana.png";
import lugarQuatro from "../../../assets/Images/Cidades/Rio-de-janeiro/parque-lage.png";


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
            <img src={lugarUm} alt="Cristo Redentor" />
            <h5>Cristo Redentor</h5>
          </div>
          <div>
            <img src={lugarDois} alt="Feira de São Cristóvao" />
            <h5>Feira de São Cristóvão</h5>
          </div>
          <div>
            <img src={lugarTres} alt="Forte de Copacabana" />
            <h5>Forte de Copacabana</h5>
          </div>
          <div>
            <img src={lugarQuatro} alt="Parque Lage" />
          <h5>Parque Lage</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
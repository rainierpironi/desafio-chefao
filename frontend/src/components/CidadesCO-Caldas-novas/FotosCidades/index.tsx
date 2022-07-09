import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import hotPark from "../../../assets/Images/Cidades/Caldas-novas/hot-park.png";
import diRoma from "../../../assets/Images/Cidades/Caldas-novas/diRoma.png";
import nautico from "../../../assets/Images/Cidades/Caldas-novas/nautico.png";
import parqueCaldas from "../../../assets/Images/Cidades/Caldas-novas/parque-caldas.png";


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
            <img src={hotPark} alt="Hot Park" />
            <h5>Hot Park</h5>
          </div>
          <div>
            <img src={diRoma} alt="diRoma Acqua Park" />
            <h5>diRoma Acqua Park</h5>
          </div>
          <div>
            <img src={nautico} alt="Náutico Praia Clube" />
            <h5>Náutico Praia Clube</h5>
          </div>
          <div>
            <img src={parqueCaldas} alt="Parque Estadual da <br/> Serra de Caldas Novas" />
            <h5>Parque Estadual da <br/> Serra de Caldas Novas</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
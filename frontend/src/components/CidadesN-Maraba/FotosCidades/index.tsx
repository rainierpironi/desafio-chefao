import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import lugarUm from "../../../assets/Images/Cidades/Maraba/orla.png";
import lugarDois from "../../../assets/Images/Cidades/Maraba/parque.png";
import lugarTres from "../../../assets/Images/Cidades/Maraba/praia.png";
import lugarQuatro from "../../../assets/Images/Cidades/Maraba/ponte.png";


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
            <img src={lugarUm} alt="Ilha do Amor" />
            <h5>Ilha do Amor</h5>
          </div>
          <div>
            <img src={lugarDois} alt="Ponta do Cururu" />
            <h5>Ponta do Cururu</h5>
          </div>
          <div>
            <img src={lugarTres} alt="Ponta do Mureta" />
            <h5>Ponta do Mureta</h5>
          </div>
          <div>
            <img src={lugarQuatro} alt="Serra Ibitira Piroca" />
            <h5>Serra Ibitira Piroca</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
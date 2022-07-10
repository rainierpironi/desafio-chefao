import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import lugarUm from "../../../assets/Images/Cidades/Sao-paulo/paulista.png";
import lugarDois from "../../../assets/Images/Cidades/Sao-paulo/liberdade.png";
import lugarTres from "../../../assets/Images/Cidades/Sao-paulo/beco-batman.png";
import lugarQuatro from "../../../assets/Images/Cidades/Sao-paulo/ibirapuera.png";


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
            <img src={lugarUm} alt="Avenida Paulista" />
            <h5>Avenida Paulista</h5>
          </div>
          <div>
            <img src={lugarDois} alt="Bairro da Liberdade" />
            <h5>Bairro da Liberdade</h5>
          </div>
          <div>
            <img src={lugarTres} alt="Beco do Batman" />
            <h5>Beco do Batman</h5>
          </div>
          <div>
            <img src={lugarQuatro} alt="Parque Ibirapuera" />
          <h5>Parque Ibirapuera</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
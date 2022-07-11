import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import lugarUm from "../../../assets/Images/Cidades/Gramado/lago-negro.png";
import lugarDois from "../../../assets/Images/Cidades/Gramado/mini-mundo.png";
import lugarTres from "../../../assets/Images/Cidades/Gramado/zoo.png";
import lugarQuatro from "../../../assets/Images/Cidades/Gramado/alpen-park.png";


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
            <img src={lugarUm} alt="Lago Negro" />
            <h5>Lago Negro</h5>
          </div>
          <div>
            <img src={lugarDois} alt="Mini Mundo" />
            <h5>Mini Mundo</h5>
          </div>
          <div>
            <img src={lugarTres} alt="GramadoZoo" />
            <h5>GramadoZoo</h5>
          </div>
          <div>
            <img src={lugarQuatro} alt="Alpen Park" />
          <h5>Alpen Park</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
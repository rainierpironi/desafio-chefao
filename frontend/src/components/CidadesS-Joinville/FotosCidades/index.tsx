import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import lugarUm from "../../../assets/Images/Cidades/Joinville/estrada-bonita.png";
import lugarDois from "../../../assets/Images/Cidades/Joinville/zoobotanico.png";
import lugarTres from "../../../assets/Images/Cidades/Joinville/mirante-francisca.png";
import lugarQuatro from "../../../assets/Images/Cidades/Joinville/mirante-joinville.png";


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
            <img src={lugarUm} alt="Estrada Bonita" />
            <h5>Estrada Bonita</h5>
          </div>
          <div>
            <img src={lugarDois} alt="Zoobotânico Joinville" />
            <h5>Zoobotânico Joinville</h5>
          </div>
          <div>
            <img src={lugarTres} alt="Mirante da Serra Dona Francisca" />
            <h5>Mirante da Serra Dona<br/> Francisca</h5>
          </div>
          <div>
            <img src={lugarQuatro} alt="Mirante de Joinville" />
          <h5>Mirante de Joinville</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
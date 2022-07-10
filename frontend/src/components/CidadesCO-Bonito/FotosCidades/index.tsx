import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import lugarUm from "../../../assets/Images/Cidades/Bonito/gruta.png";
import lugarDois from "../../../assets/Images/Cidades/Bonito/sucuri.png";
import lugarTres from "../../../assets/Images/Cidades/Bonito/abismo.png";
import lugarQuatro from "../../../assets/Images/Cidades/Bonito/formoso.png";


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
            <img src={lugarUm} alt="Gruta do Lago Azul" />
            <h5>Gruta do Lago Azul</h5>
          </div>
          <div>
            <img src={lugarDois} alt="Rio Sucuri" />
            <h5>Rio Sucuri</h5>
          </div>
          <div>
            <img src={lugarTres} alt="Abismo Anhumas" />
            <h5>Abismo Anhumas</h5>
          </div>
          <div>
            <img src={lugarQuatro} alt="Parque Ecológico Rio Formoso" />
          <h5>Parque Ecológico Rio<br/> Formoso</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
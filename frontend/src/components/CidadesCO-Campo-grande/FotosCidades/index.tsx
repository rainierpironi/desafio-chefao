import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import lugarUm from "../../../assets/Images/Cidades/Campo-grande/indigenas.png";
import lugarDois from "../../../assets/Images/Cidades/Campo-grande/araras.png";
import lugarTres from "../../../assets/Images/Cidades/Campo-grande/prosa.png";
import lugarQuatro from "../../../assets/Images/Cidades/Campo-grande/ceuzinho.png";


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
            <img src={lugarUm} alt="Parque das Nações Indígenas" />
            <h5>Parque das Nações<br/> Indígenas</h5>
          </div>
          <div>
            <img src={lugarDois} alt="Praça das Araras" />
            <h5>Praça das Araras</h5>
          </div>
          <div>
            <img src={lugarTres} alt="Parque Estadual do Prosa" />
            <h5>Parque Estadual do<br/> Prosa</h5>
          </div>
          <div>
            <img src={lugarQuatro} alt="Cachoeira do Ceuzinho" />
          <h5>Cachoeira do Ceuzinho</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
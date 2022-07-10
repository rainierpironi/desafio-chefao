import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import mercadoModelo from "../../../assets/Images/Cidades/Salvador/mercado-modelo.png";
import pelourinho from "../../../assets/Images/Cidades/Salvador/pelourinho.png";
import farolBarra from "../../../assets/Images/Cidades/Salvador/farol-da-barra.png";
import igrejaBonfim from "../../../assets/Images/Cidades/Salvador/igreja-bonfim.png";


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
            <img src={mercadoModelo} alt="Mercado Modelo" />
            <h5>Mercado Modelo</h5>
          </div>
          <div>
            <img src={pelourinho} alt="Pelourinho" />
            <h5>Pelourinho</h5>
          </div>
          <div>
            <img src={farolBarra} alt="Farol da Barra" />
            <h5>Farol da Barra</h5>
          </div>
          <div>
            <img src={igrejaBonfim} alt="Igreja Nosso Senhor<br/> do Bonfim" />
            <h5>Igreja Nosso Senhor<br/> do Bonfim</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
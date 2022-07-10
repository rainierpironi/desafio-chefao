import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import igrejaBatista from "../../../assets/Images/Cidades/Trancoso/igreja-batista.png";
import praiaEspelho from "../../../assets/Images/Cidades/Trancoso/praia-espelho.png";
import quadrado from "../../../assets/Images/Cidades/Trancoso/quadrado.png";
import praiaNativos from "../../../assets/Images/Cidades/Trancoso/praia-nativos.png";


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
            <img src={igrejaBatista} alt="Igreja São João<b/> Batista" />
            <h5>Igreja São João<b/> Batista</h5>
          </div>
          <div>
            <img src={praiaEspelho} alt="Praia do Espelho" />
            <h5>Praia do Espelho</h5>
          </div>
          <div>
            <img src={quadrado} alt="Quadrado" />
            <h5>Quadrado</h5>
          </div>
          <div>
            <img src={praiaNativos} alt="Praia dos Nativos" />
            <h5>Praia dos Nativos</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
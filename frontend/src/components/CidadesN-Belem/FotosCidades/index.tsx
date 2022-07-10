import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import parqueGarcas from "../../../assets/Images/Cidades/Belem/parque-garcas.png";
import estacaoDocas from "../../../assets/Images/Cidades/Belem/estacao.png";
import museuGoeldi from "../../../assets/Images/Cidades/Belem/museo.png";
import mercadoPeso from "../../../assets/Images/Cidades/Belem/mercado.png";


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
            <img src={parqueGarcas} alt="Parque Zoobotânico Mangal das Garças" />
            <h5>Parque Zoobotânico<br/> Mangal das Garças</h5>
          </div>
          <div>
            <img src={estacaoDocas} alt="Estação das Docas" />
            <h5>Estação das Docas</h5>
          </div>
          <div>
            <img src={museuGoeldi} alt="Museo Paraense Emílio<br/> Goeldi" />
            <h5>Museo Paraense Emílio<br/> Goeldi</h5>
          </div>
          <div>
            <img src={mercadoPeso} alt="Mercado Ver-o-Peso" />
            <h5>Mercado Ver-o-Peso</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
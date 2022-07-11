import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import lugarUm from "../../../assets/Images/Cidades/Canela/cascata-caracol.png";
import lugarDois from "../../../assets/Images/Cidades/Canela/mundo-vapor.png";
import lugarTres from "../../../assets/Images/Cidades/Canela/paroquia-lourdes.png";
import lugarQuatro from "../../../assets/Images/Cidades/Canela/parque-florybal.png";


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
            <img src={lugarUm} alt="Cascata do Caracol" />
            <h5>Cascata do Caracol</h5>
          </div>
          <div>
            <img src={lugarDois} alt="Mundo a Vapor" />
            <h5>Mundo a Vapor</h5>
          </div>
          <div>
            <img src={lugarTres} alt="Paróquia Nossa Senhora de Lourdes" />
            <h5>Paróquia Nossa Senhora<br/> de Lourdes</h5>
          </div>
          <div>
            <img src={lugarQuatro} alt="Parque Terra Mágica Florybal" />
          <h5>Parque Terra Mágica<br/> Florybal</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import teatroAmazonas from "../../../assets/Images/Cidades/Manaus/teatro-amazonas.png";
import parqueMindu from "../../../assets/Images/Cidades/Manaus/parque-mindu.png";
import portoManaus from "../../../assets/Images/Cidades/Manaus/porto-manaus.png";
import ponteRioNegro from "../../../assets/Images/Cidades/Manaus/ponte-negro.png";


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
            <img src={teatroAmazonas} alt="teatro amazonas" />
            <h5>Teatro Amazonas</h5>
          </div>
          <div>
            <img src={parqueMindu} alt="Parque Municipal do Mindu" />
            <h5>Parque Municipal do <br/> Mindu</h5>
          </div>
          <div>
            <img src={portoManaus} alt="Porto de Manaus" />
            <h5>Porto de Manaus</h5>
          </div>
          <div>
            <img src={ponteRioNegro} alt="Ponte Rio Negro" />
            <h5>Ponte Rio Negro</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
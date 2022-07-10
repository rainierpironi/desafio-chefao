import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import lugarUm from "../../../assets/Images/Cidades/Bodoquena/onca.png";
import lugarDois from "../../../assets/Images/Cidades/Bodoquena/macaco.png";
import lugarTres from "../../../assets/Images/Cidades/Bodoquena/eco.png";
import lugarQuatro from "../../../assets/Images/Cidades/Bodoquena/lontra.png";


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
            <img src={lugarUm} alt="Cachoeira Boca da Onça" />
            <h5>Cachoeira Boca<br/> da Onça</h5>
          </div>
          <div>
            <img src={lugarDois} alt="Buraco do Macaco" />
            <h5>Buraco do Macaco</h5>
          </div>
          <div>
            <img src={lugarTres} alt="Eco Serrana Park" />
            <h5>Eco Serrana Park</h5>
          </div>
          <div>
            <img src={lugarQuatro} alt="Poço da Lontra" />
          <h5>Poço da Lontra</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
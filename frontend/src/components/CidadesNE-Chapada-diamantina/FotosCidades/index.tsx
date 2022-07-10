import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import pocoEncantado from "../../../assets/Images/Cidades/Chapada-diamantina/poco-encantado.png";
import cachoeiraFumaça from "../../../assets/Images/Cidades/Chapada-diamantina/cachoeira-fumaça.png";
import valePati from "../../../assets/Images/Cidades/Chapada-diamantina/vale-pati.png";
import cachoeiraBuracao from "../../../assets/Images/Cidades/Chapada-diamantina/cachoeira-buracao.png";


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
            <img src={pocoEncantado} alt="Poço Encantado" />
            <h5>Poço Encantado</h5>
          </div>
          <div>
            <img src={cachoeiraFumaça} alt="Cachoeira da Fumaça" />
            <h5>Cachoeira da Fumaça</h5>
          </div>
          <div>
            <img src={valePati} alt="Vale do Pati" />
            <h5>Vale do Pati</h5>
          </div>
          <div>
            <img src={cachoeiraBuracao} alt="Cachoeira do Buracão" />
            <h5>Cachoeira do Buracão</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
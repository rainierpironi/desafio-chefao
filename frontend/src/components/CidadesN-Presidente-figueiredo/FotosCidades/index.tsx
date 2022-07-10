import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import fervedouro from "../../../assets/Images/Cidades/Presidente-figueiredo/fervedouro.png";
import cachoeiraIracema from "../../../assets/Images/Cidades/Presidente-figueiredo/cachoeira-iracema.png";
import cachoeiraSantuario from "../../../assets/Images/Cidades/Presidente-figueiredo/cachoeira-santuario.png";
import grutaJudeia from "../../../assets/Images/Cidades/Presidente-figueiredo/gruta-judeia.png";


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
            <img src={fervedouro} alt="Fervedouro do Maranhão" />
            <h5>Fervedouro do<br/> Maranhão</h5>
          </div>
          <div>
            <img src={cachoeiraIracema} alt="Cachoeira de Iracema" />
            <h5>Cachoeira de Iracema</h5>
          </div>
          <div>
            <img src={cachoeiraSantuario} alt="Cachoeira do Santuário" />
            <h5>Cachoeira do Santuário</h5>
          </div>
          <div>
            <img src={grutaJudeia} alt="Gruta da Judeia" />
            <h5>Gruta da Judeia</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
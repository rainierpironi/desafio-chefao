import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import lugarUm from "../../../assets/Images/Cidades/Florianopolis/ilha-do-campeche.png";
import lugarDois from "../../../assets/Images/Cidades/Florianopolis/praia-joaquina.png";
import lugarTres from "../../../assets/Images/Cidades/Florianopolis/museu-historico.png";
import lugarQuatro from "../../../assets/Images/Cidades/Florianopolis/parque-rio-vermelho.png";


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
            <img src={lugarUm} alt="Ilha do Campeche" />
            <h5>Ilha do Campeche</h5>
          </div>
          <div>
            <img src={lugarDois} alt="Praia da Joaquina" />
            <h5>Praia da Joaquina</h5>
          </div>
          <div>
            <img src={lugarTres} alt="Museu Histórico de Santa Catarina" />
            <h5>Museu Histórico de<br/> Santa Catarina</h5>
          </div>
          <div>
            <img src={lugarQuatro} alt="Parque Estadua do Rio Vermelho" />
          <h5>Parque Estadua do<br/> Rio Vermelho</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
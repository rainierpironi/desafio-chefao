import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import lugarUm from "../../../assets/Images/Cidades/Ilhabela/agua-branca.png";
import lugarDois from "../../../assets/Images/Cidades/Ilhabela/mirante-coracao.png";
import lugarTres from "../../../assets/Images/Cidades/Ilhabela/poco-ducha.png";
import lugarQuatro from "../../../assets/Images/Cidades/Ilhabela/praia-curral.png";


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
            <img src={lugarUm} alt="Cachoeira Aguá Branca" />
            <h5>Cachoeira Aguá Branca</h5>
          </div>
          <div>
            <img src={lugarDois} alt="Mirante do Coração" />
            <h5>Bairro da Liberdade</h5>
          </div>
          <div>
            <img src={lugarTres} alt="Poço Ducha" />
            <h5>Poço Ducha</h5>
          </div>
          <div>
            <img src={lugarQuatro} alt="Praia do Curral" />
          <h5>Praia do Curral</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
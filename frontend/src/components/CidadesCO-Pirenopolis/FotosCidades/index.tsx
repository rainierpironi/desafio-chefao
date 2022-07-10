import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import lugarUm from "../../../assets/Images/Cidades/Pirenopolis/caminho-coralina.png";
import lugarDois from "../../../assets/Images/Cidades/Pirenopolis/santuario.png";
import lugarTres from "../../../assets/Images/Cidades/Pirenopolis/bonsucesso.png";
import lugarQuatro from "../../../assets/Images/Cidades/Pirenopolis/usina-velha.png";


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
            <img src={lugarUm} alt="Caminho de Cora Coralina" />
            <h5>Caminho de Cora<br/> Coralina</h5>
          </div>
          <div>
            <img src={lugarDois} alt="Santuário de Vida Silvestre Vagafogo" />
            <h5>Santuário de Vida<br/> Silvestre Vagafogo</h5>
          </div>
          <div>
            <img src={lugarTres} alt="Cachoeira Bonsucesso" />
            <h5>Cachoeira Bonsucesso</h5>
          </div>
          <div>
            <img src={lugarQuatro} alt="Cachoeira Usina Velha" />
          <h5>Cachoeira Usina Velha</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
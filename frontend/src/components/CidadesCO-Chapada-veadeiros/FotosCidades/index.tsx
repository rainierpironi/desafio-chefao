import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import lugarUm from "../../../assets/Images/Cidades/Chapada-veadeiros/vale-lua.png";
import lugarDois from "../../../assets/Images/Cidades/Chapada-veadeiros/almecegas.png";
import lugarTres from "../../../assets/Images/Cidades/Chapada-veadeiros/janela.png";
import lugarQuatro from "../../../assets/Images/Cidades/Chapada-veadeiros/couros.png";


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
            <img src={lugarUm} alt="Vale da Lua" />
            <h5>Vale da Lua</h5>
          </div>
          <div>
            <img src={lugarDois} alt="Cachoeira Almécegas" />
            <h5>Cachoeira Almécegas</h5>
          </div>
          <div>
            <img src={lugarTres} alt="Mirante da Janela" />
            <h5>Mirante da Janela</h5>
          </div>
          <div>
            <img src={lugarQuatro} alt="Cataratas dos Couros" />
          <h5>Cataratas dos Couros</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
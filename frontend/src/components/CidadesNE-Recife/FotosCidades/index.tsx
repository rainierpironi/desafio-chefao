import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import armazensPorto from "../../../assets/Images/Cidades/Recife/armazens-porto.png";
import marcoPolo from "../../../assets/Images/Cidades/Recife/marco-polo.png";
import ruaMoeda from "../../../assets/Images/Cidades/Recife/rua-moeda.png";
import torreMalakoff from "../../../assets/Images/Cidades/Recife/torre-malakoff.png";


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
            <img src={armazensPorto} alt="Armazéns do Porto" />
            <h5>Armazéns do Porto</h5>
          </div>
          <div>
            <img src={marcoPolo} alt="Marco Polo" />
            <h5>Marco Polo</h5>
          </div>
          <div>
            <img src={ruaMoeda} alt="Rua da Moeda" />
            <h5>Rua da Moeda</h5>
          </div>
          <div>
            <img src={torreMalakoff} alt="Torre Malakoff" />
            <h5>Torre Malakoff</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
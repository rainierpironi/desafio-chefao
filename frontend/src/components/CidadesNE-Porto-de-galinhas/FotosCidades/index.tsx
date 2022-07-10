import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import praiaCarneiros from "../../../assets/Images/Cidades/Porto-de-galinhas/praia-carneiros.png";
import engenhoGaipio from "../../../assets/Images/Cidades/Porto-de-galinhas/engenho-gaipio.png";
import praiaAlto from "../../../assets/Images/Cidades/Porto-de-galinhas/praia-alto.png";
import museuTartarugas from "../../../assets/Images/Cidades/Porto-de-galinhas/museu-tartarugas.png";


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
            <img src={praiaCarneiros} alt="Praia de Carneiros" />
            <h5>Praia de Carneiros</h5>
          </div>
          <div>
            <img src={engenhoGaipio} alt="Engenho Gaipió" />
            <h5>Engenho Gaipió</h5>
          </div>
          <div>
            <img src={praiaAlto} alt="Praia do Muro Alto" />
            <h5>Praia do Muro Alto</h5>
          </div>
          <div>
            <img src={museuTartarugas} alt="Museu das Tartarugas" />
            <h5>Museu das Tartarugas</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
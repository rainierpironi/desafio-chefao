import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import lugarUm from "../../../assets/Images/Cidades/Petropolis/la-grande.png";
import lugarDois from "../../../assets/Images/Cidades/Petropolis/castelo-itaipava.png";
import lugarTres from "../../../assets/Images/Cidades/Petropolis/museu-imperial.png";
import lugarQuatro from "../../../assets/Images/Cidades/Petropolis/cachoeira-da-macumba.png";


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
            <img src={lugarUm} alt="La Grande Vallée" />
            <h5>La Grande Vallée</h5>
          </div>
          <div>
            <img src={lugarDois} alt="Castelo Itaipava" />
            <h5>Castelo Itaipava</h5>
          </div>
          <div>
            <img src={lugarTres} alt="Museu Imperial" />
            <h5>Museu Imperial</h5>
          </div>
          <div>
            <img src={lugarQuatro} alt="Cachoeira da Macumba" />
          <h5>Cachoeira da Macumba</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
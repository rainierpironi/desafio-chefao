import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import lugarUm from "../../../assets/Images/Cidades/Porto-alegre/casa-mario-quintana.png";
import lugarDois from "../../../assets/Images/Cidades/Porto-alegre/parque-moinhos.png";
import lugarTres from "../../../assets/Images/Cidades/Porto-alegre/parque-farroupilha.png";
import lugarQuatro from "../../../assets/Images/Cidades/Porto-alegre/jardim-botanico.png";


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
            <img src={lugarUm} alt="Casa de Cultura Mario Quintana" />
            <h5>Casa de Cultura Mario<br/> Quintana</h5>
          </div>
          <div>
            <img src={lugarDois} alt="Parque Moinhos de Vento" />
            <h5>Parque Moinhos de<br/> Vento</h5>
          </div>
          <div>
            <img src={lugarTres} alt="Parque Farroupilha" />
            <h5>Parque Farroupilha</h5>
          </div>
          <div>
            <img src={lugarQuatro} alt="Jardim Botânico de Porto Alegre" />
          <h5>Jardim Botânico de<br/> Porto Alegre</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
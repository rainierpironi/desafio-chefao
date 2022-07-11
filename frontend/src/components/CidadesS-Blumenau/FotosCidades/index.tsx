import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import lugarUm from "../../../assets/Images/Cidades/Blumenau/museu-da-cerveja.png";
import lugarDois from "../../../assets/Images/Cidades/Blumenau/parque-ramiro.png";
import lugarTres from "../../../assets/Images/Cidades/Blumenau/rua-palmeiras.png";
import lugarQuatro from "../../../assets/Images/Cidades/Blumenau/museu-ecologia.png";


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
            <img src={lugarUm} alt="Museu da Cerveja Blumenau" />
            <h5>Museu da Cerveja<br/> Blumenau</h5>
          </div>
          <div>
            <img src={lugarDois} alt="Parque Ramiro Ruediger" />
            <h5>Parque Ramiro<br/> Ruediger</h5>
          </div>
          <div>
            <img src={lugarTres} alt="Rua das Palmeiras" />
            <h5>Rua das Palmeiras</h5>
          </div>
          <div>
            <img src={lugarQuatro} alt="Museu de Ecologia Fritz Müller" />
          <h5>Museu de Ecologia<br/> Fritz Müller</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
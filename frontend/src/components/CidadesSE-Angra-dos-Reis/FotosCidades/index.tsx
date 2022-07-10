import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import lugarUm from "../../../assets/Images/Cidades/Angra-dos-reis/ilha-catagas.png";
import lugarDois from "../../../assets/Images/Cidades/Angra-dos-reis/aquario-hostel.png";
import lugarTres from "../../../assets/Images/Cidades/Angra-dos-reis/centro-cultural.png";
import lugarQuatro from "../../../assets/Images/Cidades/Angra-dos-reis/pico-do-papagaio.png";


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
            <img src={lugarUm} alt="Ilha Catagás" />
            <h5>Ilha Catagás</h5>
          </div>
          <div>
            <img src={lugarDois} alt="Aquário Hostel" />
            <h5>Aquário Hostel</h5>
          </div>
          <div>
            <img src={lugarTres} alt="Centro Cultural Theóphillo Massada" />
            <h5>Centro Cultural<br/> Theóphillo Massada</h5>
          </div>
          <div>
            <img src={lugarQuatro} alt="Pico do Papaguaio" />
          <h5>Pico do Papaguaio</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
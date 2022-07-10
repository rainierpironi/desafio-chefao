import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import ilhaAmor from "../../../assets/Images/Cidades/Alter-do-chao/ilha.png";
import pontaCururu from "../../../assets/Images/Cidades/Alter-do-chao/ponta-cururu.png";
import pontaMureta from "../../../assets/Images/Cidades/Alter-do-chao/ponta-mureta.png";
import serraPiroca from "../../../assets/Images/Cidades/Alter-do-chao/serra.png";


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
            <img src={ilhaAmor} alt="Ilha do Amor" />
            <h5>Ilha do Amor</h5>
          </div>
          <div>
            <img src={pontaCururu} alt="Ponta do Cururu" />
            <h5>Ponta do Cururu</h5>
          </div>
          <div>
            <img src={pontaMureta} alt="Ponta do Mureta" />
            <h5>Ponta do Mureta</h5>
          </div>
          <div>
            <img src={serraPiroca} alt="Serra Ibitira Piroca" />
            <h5>Serra Ibitira Piroca</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
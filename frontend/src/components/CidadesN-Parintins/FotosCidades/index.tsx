import React, {Fragment} from 'react';
import linhaPontilhada from "../../../assets/Images/Cidades/Olinda/dashed-border.png";
import catedralCarmo from "../../../assets/Images/Cidades/Parintins/catedral-carmo.png";
import mercadoParintins from "../../../assets/Images/Cidades/Parintins/mercado.png";
import bumbodromo from "../../../assets/Images/Cidades/Parintins/bumbodromo.png";
import curralBois from "../../../assets/Images/Cidades/Parintins/curral.png";


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
            <img src={catedralCarmo} alt="Catedral de Nossa Senhora do Carmo" />
            <h5>Catedral de Nossa <br/> Senhora do Carmo</h5>
          </div>
          <div>
            <img src={mercadoParintins} alt="Mercado Municipal de Parintins" />
            <h5>Mercado Municipal de <br/> Parintins</h5>
          </div>
          <div>
            <img src={bumbodromo} alt="Bumbódromo de<b/> Parintins" />
            <h5>Bumbódromo de<br/> Parintins</h5>
          </div>
          <div>
            <img src={curralBois} alt="Curral dos Bois" />
            <h5>Curral dos Bois</h5>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default FotosCidades;
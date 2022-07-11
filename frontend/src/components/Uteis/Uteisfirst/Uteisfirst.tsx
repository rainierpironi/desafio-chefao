import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SetaVoltar from '../../../assets/Images/seta-voltar.png';
import "../Uteisfirst/Uteisfirst.css";


function Uteisfirst() {
  return (
    <Fragment>
      <div className='containerUtilFirst'>
        <Link to={'/'}>
          <img src={SetaVoltar} className='voltarPagina' alt="seta-voltar" />
        </Link>
        <div className='containerTituloUtilFirst'>
          <div className='tituloSegFirst'>
            <h1>Dicas de Contatos Úteis</h1>
            <p>Procurando soluções em caso de necessidade...</p>
          </div>
        </div>
      </div>



    </Fragment>
  )
}

export default Uteisfirst
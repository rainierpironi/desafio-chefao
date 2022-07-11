import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import SetaVoltar from '../../../assets/Images/seta-voltar.png';
import "../Planfirst/Planfirst.css"


function Planfirst() {
  return (
    <Fragment>

      <div className='containerPlanFirst'>
        <Link to={'/'}>
          <img src={SetaVoltar} className='voltarPagina' alt="seta-voltar" />
        </Link>
        <div className='containerTituloPlanFirst'>
          <div className='tituloPlanFirst'>
            <h1>Dicas de Planejamento</h1>
            <p>Organizando e entendendo o que é preciso para por o pé na estrada...</p>
          </div>
        </div>
      </div>



    </Fragment>
  )
}

export default Planfirst
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import SetaVoltar from '../../../assets/Images/seta-voltar.png';
import "../../Culturais/Culturaisfirst/Culturaisfirst.css"

function Culturaisfirst() {
  return (
    <Fragment>
      <div className='containerCultFirst'>
        <Link to={'/'}>
          <img src={SetaVoltar} className='voltarPagina' alt="seta-voltar" />
        </Link>
        <div className='containerCultTituloFirst'>
          <div className='tituloCultFirst'>
            <h1>Dicas Culturais</h1>
            <p>Conhecendo a riqueza das diferenças culturais no Brasi...
            </p>
          </div>
        </div>
      </div>
      <div>
      </div>
    </Fragment>
  )
}

export default Culturaisfirst
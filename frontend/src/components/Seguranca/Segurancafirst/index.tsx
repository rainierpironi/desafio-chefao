import React, { Fragment } from 'react'
import { Figure } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Imagem from "../../../assets/Images/segdesktop.png"
import "../Segurancafirst/styles.css"
import Faixa from "../../../assets/Images/segfaixa.png"

function SecurityFirst() {
  return (
    <Fragment>
<main className='containercult'>
        
        <div className='containerBack'>
          <img src={Imagem} alt="" />
        </div>
        
        <div className='titulocult'>
          <h1>Dicas de Segurança</h1>
          <p>Identificando fatores de risco para evitá-los...</p>
        </div>
        <div className='faixacult'>
          <img src={Faixa} alt="" />
        </div>

      </main>



    </Fragment>
     )
}

export default SecurityFirst
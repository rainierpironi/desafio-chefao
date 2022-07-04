import React, { Fragment } from 'react'
import { Figure } from 'react-bootstrap'
import "../../Culturais/Culturaisfirst/Culturaisfirst.css"
import Imagem from "../../../assets/Images/culturaisdesk.png"
import Faixa from "../../../assets/Images/faixacult.png"

function Culturaisfirst() {
  return (
    <Fragment>
      <main className='containercult'>
        
        <div className='containerBack'>
          <img src={Imagem} alt="" />
        </div>
        
        <div className='titulocult'>
          <h1>Dicas Culturais</h1>
          <p>Conhecendo a riqueza das diferenças culturais no Brasil...</p>
        </div>
        <div className='faixacult'>
          <img src={Faixa} alt="" />
        </div>

      </main>

    </Fragment>
  )
}

export default Culturaisfirst
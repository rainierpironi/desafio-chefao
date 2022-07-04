import React, { Fragment } from 'react'
import { Container, Figure } from 'react-bootstrap'
import "../Planfirst/Planfirst.css"
import Imagem from "../../../assets/Images/planejamento.png"
import Faixa from "../../../assets/Images/faixaplanejamento.png"

function Planfirst() {
  return (
    <Fragment>
      
      <main className='containercult'>
        
        <div className='containerBack'>
          <img src={Imagem} alt="" />
        </div>
        
        <div className='titulocult'>
          <h1>Dicas Planejamento</h1>
          <p>Organizando e entendendo o que é preciso para por o pé na estrada...</p>
        </div>
        <div className='faixacult'>
          <img src={Faixa} alt="" />
        </div>

      </main>


            
            


    </Fragment>
  )
}

export default Planfirst
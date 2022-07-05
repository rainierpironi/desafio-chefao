import React, { Fragment } from 'react'
import { Container, Figure } from 'react-bootstrap'
import "../Uteisfirst/Uteisfirst.css"
import Imagem from "../../../assets/Images/contatosuteisdesk.png"
import Faixa from "../../../assets/Images/faixauteis.png"

function Uteisfirst() {
  return (
    <Fragment>
     <main className='containercult'>
        
        <div className='containerBack'>
          <img src={Imagem} alt="" />
        </div>
        
        <div className='titulocult'>
          <h1>Dicas de Contatos Úteis</h1>
          <p>Procurando soluções em caso de necessidade...</p>
        </div>
        <div className='faixacult'>
          <img src={Faixa} alt="" />
        </div>

      </main>

            


    </Fragment>
  )
}

export default Uteisfirst
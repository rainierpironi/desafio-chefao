import React, { Fragment } from 'react'
import { Container, Figure } from 'react-bootstrap'
import "../Uteisfirst/Uteisfirst.css"
import Imagem from "../../../assets/Images/planejamento.jpg"

function Uteisfirst() {
  return (
    <Fragment>
      
<div className='containerUteisFirst'>
                <div className='textoUteisFirst'>
                    <p>Conhecendo os costumes locais de cada região do Brasil... </p>
                    <br />
                    <h1>Dicas</h1>
                    <h6>Contatos Úteis</h6>
                </div>

                <Figure className='figuraUteisFirst' >
                    <Figure.Image
                        // width={650}
                        // height={180}
                        alt="171x180"
                       
                    />
                    
                </Figure>
                
            </div>

            


    </Fragment>
  )
}

export default Uteisfirst
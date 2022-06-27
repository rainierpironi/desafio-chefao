import React, { Fragment } from 'react'
import { Container, Figure } from 'react-bootstrap'
import "../Planfirst/Planfirst.css"
import Imagem from "../../../assets/Images/planejamento.jpg"

function Planfirst() {
  return (
    <Fragment>
      
<div className='containerPlan'>
                <div className='textoPlan'>
                    <p>Organizando e entendendo o que preciso para por o pé na estrada...</p>
                    <br />
                    <h1>Dicas</h1>
                    <h6>Planejamento</h6>
                </div>

                <Figure className='figuraPlan' >
                    <Figure.Image
                        // width={650}
                        // height={180}
                        alt="171x180"
                        src={Imagem}
                    />
                    
                </Figure>
                
            </div>

            


    </Fragment>
  )
}

export default Planfirst
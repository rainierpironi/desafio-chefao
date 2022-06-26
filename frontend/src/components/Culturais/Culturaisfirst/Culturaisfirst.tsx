import React, { Fragment } from 'react'
import { Figure } from 'react-bootstrap'
import "../../Culturais/Culturaisfirst/Culturaisfirst.css"
import Imagem from "../../../assets/Images/cultura.jpg"

function Culturaisfirst() {
  return (
    <Fragment>
      
<div className='containerCult'>
                <div className='textoCult'>
                    <p>Conhecendo os costumes locais de cada região do Brasil...</p>
                    <br />
                    <h1>Dicas</h1>
                    <h6>Culturais</h6>
                </div>

                <Figure className='figuraCult' >
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

export default Culturaisfirst
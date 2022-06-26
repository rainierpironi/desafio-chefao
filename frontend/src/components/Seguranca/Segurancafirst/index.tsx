import React, { Fragment } from 'react'
import { Figure } from 'react-bootstrap'
import Imagem from "../../../assets/Images/seguranca.jpg"
import "../Segurancafirst/styles.css"

function SecurityFirst() {
  return (
    <Fragment>

<div className='containerSecurityFirst'>
                <div className='textoSecurityFirst'>
                    <p>Identificando fatores de risco para evitá-los...</p>
                    <br />
                    <h1>Dicas</h1>
                    <h6>Seguranca</h6>
                </div>

                <Figure className='figuraSecurityFirst' >
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

export default SecurityFirst
import React, { Fragment } from 'react'
import { Card, Container, Figure } from 'react-bootstrap'
import Imagem from "../../assets/Images/imgapoie.png"
import "./Apoie.css"

function Apoie() {
    return (
        <Fragment>
            
            <div className='containerApoie' id='apoie'>
            
                <div className='textoApoie'>
                
                    <h1>Apoie</h1>
                    <br />
                    <p>Gostou da plataforma? Saiba como você pode contribuir financeiramente para manter essa plataforma funcionando.</p>
                </div>

                <Figure className='figura' >
                    
                   
                    
                </Figure>

            </div>

        </Fragment>
    )
}

export default Apoie
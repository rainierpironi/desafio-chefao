import  { Fragment } from 'react'
import { Figure } from 'react-bootstrap'
import "./Apoie.css"

function Apoie() {
    return (
        <Fragment>

            <div className='containerApoie' id='apoie'>

                <div className='textoApoie'>

                    <h1>Apoie</h1>
                    <br />
                    <p>Gostou da plataforma? Saiba como você pode contribuir financeiramente para manter essa plataforma funcionando.</p>
                    <a href="https://apoia.se/lavaiela" target="_blank"><button id='buttonApoie'>Contribuir</button></a>
                </div>

                

            </div>
        </Fragment>
    )
}

export default Apoie
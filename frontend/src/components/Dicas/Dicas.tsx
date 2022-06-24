import React, { Fragment } from 'react'
import "./Dicas.css"
import Culturais from "../../assets/Images/cultura.jpg"
import Seguranca from "../../assets/Images/seguranca.jpg"
import Contatos from "../../assets/Images/contatos.jpg"
import Planejamento from "../../assets/Images/planejamento.jpg"


function Dicas() {
    return (
        <Fragment>
            <div className='containerDicas'>

                <div className='containerTextoDicas'>
                    <div>
                        Dicas
                    </div>
                </div>
                <div className='culturaisSeguranca'>
                    <div className='segurancaCulturais'>
                        <img id='imagemCultura' src={Culturais} alt=" Imagem Cultura" />
                    </div>

                    <div >
                        <img id='imagemSeguranca' src={Seguranca} alt="Imagem Seguranca" />
                    </div>

                </div>

                <div className='culturaisContato'>
                         <div className='seguracaCulturais'>
                        <img id='imagemContato' src={Contatos} alt="Imagem Contato" />
                    </div>

                    <div>
                        <img id='imagemPlanejamento' src={Planejamento} alt=" Imagem Cultura" />
                    </div>

                </div>

            </div>

        </Fragment>
    )
}

export default Dicas
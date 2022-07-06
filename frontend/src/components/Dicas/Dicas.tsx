import React, { Fragment } from 'react'
import "./Dicas.css"
import Culturais from "../../assets/Images/dicasculturais.png"
import Seguranca from "../../assets/Images/dicasseguranca.png"
import Contatos from "../../assets/Images/dicascontatos.png"
import Planejamento from "../../assets/Images/dicasplaneja.png"
import { Link } from 'react-router-dom'
import Seta from "../../assets/Images/chevron-down.svg"


function Dicas() {
    return (
        <Fragment>
            <div className='containerDicas' id='dicas'>

                <div className='containerTextoDicas'>
                    <div>
                        <h1>Dicas</h1>
                    </div>
                    <div>
                        <h2>Para cada região do Brasil</h2>
                    </div>
                </div>

                <div className='containerModuloUm'>
                    <div className='conteudoModuloUm'>
                        <div className='culturais'>
                            <Link to="./culturais">
                                <img id="efeitoDicas" src={Culturais} alt="Imagem Dicas Culturais" />

                            </Link>
                        </div>
                        <div>
                            <Link to="./seguranca">
                                <img id="efeitoDicas" src={Seguranca} alt="Imagem Dicas Seguranca" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='containerModuloUm'>
                    <div className='conteudoModuloUm'>
                        <div>
                            <Link to="./uteis">
                                <img id="efeitoDicas" src={Contatos} alt="Imagem Dicas Contatos" />
                            </Link>
                        </div>
                        <div>
                            <Link to="./planejamento">
                                <img id="efeitoDicas" src={Planejamento} alt="Imagem Dicas Planejamento" />
                            </Link>
                        </div>
                    </div>
                </div>






            </div>

            <div className='gradiente'>
                <a href="#dicas" className='seta'>
                    <img src={Seta} alt="seta" className='chevron'/>
                </a>
            </div>

        </Fragment>
    )
}

export default Dicas
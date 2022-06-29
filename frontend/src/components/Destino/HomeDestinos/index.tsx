import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ImagemNorte from '../../../assets/Images/norte.svg';
import ImagemNordeste from '../../../assets/Images/nordeste.svg';
import ImagemCentroOeste from '../../../assets/Images/centro-oeste.svg';
import ImagemSudeste from '../../../assets/Images/sudeste.svg';
import ImagemSul from '../../../assets/Images/sul.svg';
import Seta from '../../../assets/Images/chevron-down.svg';
import './styles.css'

const Destinos: React.FC = () => {
    return (
        <Fragment>
            <div className="container-destinos" id='destinos'>
                <div className='blur'>
                    <a href="#destinos" className='seta-direcao'>
                        <img src={Seta} alt="seta" />
                    </a>
                </div>
                <div className='titulo-destinos'>
                    <h2>Destinos</h2>
                    <h3>Guia de destinos do Brasil</h3>
                </div>

                <div className='conteudo-destinos d-flex'>
                    <Link to='/destinos/norte' className='link-destino'>
                        <img className='imagem-destino' src={ImagemNorte} alt="" />
                    </Link>
                    <Link to='/destinos/nordeste' className='link-destino'>
                        <img className='imagem-destino' src={ImagemNordeste} alt="" />
                    </Link>
                    <Link to='/destinos/centro-oeste' className='link-destino'>
                        <img className='imagem-destino' src={ImagemCentroOeste} alt="" />
                    </Link>
                    <Link to='/destinos/sudeste' className='link-destino'>
                        <img className='imagem-destino' src={ImagemSudeste} alt="" />
                    </Link>
                    <Link to='/destinos/sul' className='link-destino'>
                        <img className='imagem-destino' src={ImagemSul} alt="" />
                    </Link>
                </div>
                <div className='blur-2'>
                    <a href="#dicas" className='seta-direcao'>
                        <img src={Seta} alt="seta" />
                    </a>
                </div>
            </div>
        </Fragment>
    );
}

export default Destinos;
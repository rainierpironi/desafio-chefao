import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ImagemExemplo from '../../../assets/Images/exemplo-destino.png';
import './styles.css'

const Destinos: React.FC = () => {
  return (
        <Fragment>
            <div className="container-destinos">
                <div className='titulo-destinos'>
                    <h1>Destinos</h1>
                    <h2>Guia de destinos do Brasil</h2>
                </div>

                <div className='conteudo-destinos d-flex'>
                    <Link to='/destinos/norte' className='link-destino'>
                        <img className='imagem-destino' src={ImagemExemplo} alt="" />
                        Norte
                    </Link>
                    <Link to='/destinos/nordeste' className='link-destino'>
                        <img className='imagem-destino' src={ImagemExemplo} alt="" />
                        Nordeste
                    </Link>
                    <Link to={'#'} className='link-destino'>
                        <img className='imagem-destino' src={ImagemExemplo} alt="" />
                        Centro-Oeste
                    </Link>
                    <Link to={'#'} className='link-destino'>
                        <img className='imagem-destino' src={ImagemExemplo} alt="" />
                        Sudeste
                    </Link>
                    <Link to={'#'} className='link-destino'>
                        <img className='imagem-destino' src={ImagemExemplo} alt="" />
                        Sul
                    </Link>
                </div>
            </div>
        </Fragment>
  );
}

export default Destinos;
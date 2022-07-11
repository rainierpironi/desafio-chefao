import React from 'react';
import Container from '../../Container';
import Voltar from "../../../assets/Images/seta-voltar.png";
import { Link } from 'react-router-dom'
import background from '../../../assets/Images/Cidades/Gramado/capa-gramado.png';
import './banner-cidades.css';

const BannerCidades: React.FC = () => {
    return (
        <Container>
            <div className='banner-cidades'
            style={{
                backgroundImage:`url(${background})`
              }}>
                <Link to="/destinos/sul">
                    <img className='voltar-pagina' src={Voltar} alt="voltar" />
                </Link>
                <div className="nome-cidades">
                    <h1>Gramado</h1>
                    <h2>Principal Destino de Inverno no Brasil</h2>
                </div>
            </div>
        </Container>
    );
}

export default BannerCidades;
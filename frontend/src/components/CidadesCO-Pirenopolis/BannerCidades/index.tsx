import React from 'react';
import Container from '../../Container';
import Voltar from "../../../assets/Images/seta-voltar.png";
import { Link } from 'react-router-dom'
import background from '../../../assets/Images/Cidades/Pirenopolis/capa-pirenopolis.png';
import './banner-cidades.css';

const BannerCidades: React.FC = () => {
    return (
        <Container>
            <div className='banner-cidades'
            style={{
                backgroundImage:`url(${background})`
              }}>
                <Link to="/destinos/centro-oeste">
                    <img className='voltar-pagina' src={Voltar} alt="voltar" />
                </Link>
                <div className="nome-cidades">
                    <h1>Pirenópolis</h1>
                    <h2>Piri</h2>
                </div>
            </div>
        </Container>
    );
}

export default BannerCidades;
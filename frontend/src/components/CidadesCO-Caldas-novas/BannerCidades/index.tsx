import React from 'react';
import Container from '../../Container';
import Seta from "../../../assets/Images/chevron-down.svg";
import Voltar from "../../../assets/Images/seta-voltar.png";
import { Link } from 'react-router-dom'
import './banner-cidades.css';

const BannerCidades: React.FC = () => {
    return (
        <Container>
            <div className='banner-cidades'>
                <Link to="/destinos/centro-oeste">
                    <img className='voltar-pagina' src={Voltar} alt="" />
                </Link>
                <div className="nome-cidades">
                    <h1>Caldas Novas</h1>
                    <h2>A maior estância hidrotermal do mundo</h2>
                </div>
            </div>
        </Container>
    );
}

export default BannerCidades;
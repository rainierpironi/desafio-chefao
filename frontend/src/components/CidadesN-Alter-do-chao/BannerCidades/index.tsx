import React from 'react';
import Container from '../../Container';
import Voltar from "../../../assets/Images/seta-voltar.png";
import { Link } from 'react-router-dom'
import background from '../../../assets/Images/Cidades/Alter-do-chao/capa-alter.png';
import './banner-cidades.css';

const BannerCidades: React.FC = () => {
    return (
        <Container>
            <div className='banner-cidades'
            style={{
                backgroundImage:`url(${background})`
              }}>
                <Link to="/destinos/norte">
                    <img className='voltar-pagina' src={Voltar} alt="" />
                </Link>
                <div className="nome-cidades">
                    <h1>Alter do Chão</h1>
                    <h2>"Caribe Amazônico"</h2>
                </div>
            </div>
        </Container>
    );
}

export default BannerCidades;
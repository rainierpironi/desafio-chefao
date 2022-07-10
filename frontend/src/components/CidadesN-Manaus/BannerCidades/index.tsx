import React from 'react';
import Container from '../../Container';
import Seta from "../../../assets/Images/chevron-down.svg";
import Voltar from "../../../assets/Images/seta-voltar.png";
import { Link } from 'react-router-dom'
import background from '../../../assets/Images/Cidades/Manaus/banner-manaus.png';
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
                    <h1>Manaus</h1>
                    <h2>Porto de Lenha</h2>
                </div>
            </div>
        </Container>
    );
}

export default BannerCidades;
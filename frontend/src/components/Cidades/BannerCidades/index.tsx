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
                <Link to="/destinos/nordeste">
                    <img className='voltar-pagina' src={Voltar} alt="" />
                </Link>
                <div className="nome-cidades">
                    <h1>Olinda</h1>
                    <h2>Patrimônio Histôrico Cultural</h2>
                </div>
                <div className='gradient'>
                    <div className='seta-down'>
                        <a href="#conteudo"><img src={Seta} alt="vá para conteúdo" /></a>
                    </div>
                </div>
            </div>


        </Container>
    );
}

export default BannerCidades;
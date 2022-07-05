import React from 'react';
import Container from '../../Container';
import Seta from "../../../assets/Images/chevron-down.svg";
import Voltar from "../../../assets/Images/seta-voltar.png";

import './banner-cidades.css';

const BannerCidades: React.FC = () => {
    return (
        <Container>
            <div className='banner-cidades'>  
                <div className="nome-cidades">
                    <h1>Olinda</h1>
                    <h2>Patrimônio Histôrico Cultural</h2>
                </div>
                <div className='gradient'></div>
            </div>

            <div className='seta-down'>
                <a href="#conteudo"><img src={Seta} alt="vá para conteúdo" /></a>
            </div>
        </Container>
    );
}

export default BannerCidades;
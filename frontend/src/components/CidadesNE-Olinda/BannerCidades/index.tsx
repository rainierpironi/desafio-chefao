import React from 'react';
import Container from '../../Container';
import Seta from "../../../assets/Images/chevron-down.svg";
import Voltar from "../../../assets/Images/seta-voltar.png";
import { Link } from 'react-router-dom'
import background from '../../../assets/Images/Cidades/Olinda/capa-olinda.png';
import './banner-cidades.css';

const BannerOlinda: React.FC = () => {
    return (
        <Container>
            <div className='banner-cidades'  
            style={{
                backgroundImage:`url(${background})`
              }}>
                <Link to="/destinos/nordeste">
                    <img className='voltar-pagina' src={Voltar} alt="" />
                </Link>
                <div className="nome-cidades">
                    <h1>Olinda</h1>
                    <h2>Patrimônio Histórico Cultural</h2>
                </div>
            </div>
        </Container>
    );
}

export default BannerOlinda;
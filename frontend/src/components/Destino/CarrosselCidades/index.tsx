import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ImagemExemplo from '../../../assets/Images/exemplo-carrossel.png';
import './styles.css';

const CarrosselCidades: React.FC = () => {

    const carousel: any = useRef(null);

    const handleLeftClick = (e: any) => {
        e.preventDefault(e);
        carousel.current.scrollLeft -= 500;
    } 

    const handleRightClick = (e: any) => {
        e.preventDefault(e);
        carousel.current.scrollLeft += 500;
    };

    return (
        <div className='container'>
            <div className='botao-prev'>
                <button onClick={handleLeftClick}>‹</button>
            </div>
            <div className='carousel' ref={carousel}>
                <div className='item'>
                    <Link to={'#'} className='link-cidade'>
                        <img className='imagem-cidade' src={ImagemExemplo} alt="" />
                        João Pessoa
                    </Link>
                    <Link to={'#'} className='link-cidade'>
                        <img className='imagem-cidade' src={ImagemExemplo} alt="" />
                        Campina Grande
                    </Link>
                    <Link to={'#'} className='link-cidade'>
                        <img className='imagem-cidade' src={ImagemExemplo} alt="" />
                        Patos
                    </Link>
                    <Link to={'#'} className='link-cidade'>
                        <img className='imagem-cidade' src={ImagemExemplo} alt="" />
                        Souza
                    </Link>
                    <Link to={'#'} className='link-cidade'>
                        <img className='imagem-cidade' src={ImagemExemplo} alt="" />
                        Areia
                    </Link>
                    <Link to={'#'} className='link-cidade'>
                        <img className='imagem-cidade' src={ImagemExemplo} alt="" />
                        Bananeiras
                    </Link>
                </div>
            </div>
            <div className='botao-next'>
                <button onClick={handleRightClick}>›</button>
            </div>
        </div>
    );
}

export default CarrosselCidades;
import styled from 'styled-components';
import bg from '../../assets/Images/banner-norte.png';
import { Link } from 'react-router-dom';

export const BannerDestinos = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    height: 110vh;
    display: flex;
    background-size:cover;
    background-position:center;
    flex-direction: column;
    justify-content: center;
`

export const VoltarPagina = styled.img`
    position: absolute;
    top: 105px;
    left: 25px;
`

export const FraseDestinos = styled.div`
    padding-left: 7%;
    font-family: 'Roboto', sans-serif;
    color: #FFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.95);
`

export const FraseDestinosTitulo = styled.h1`
    font-weight: 700;
    font-size: 52px;

    @media screen and (max-width: 900px) {
        font-size: 102px;
    }

    @media screen and (max-width: 480px) {
        font-size: 52px;
    }
`

export const FraseDestinosSubtitulo = styled.h2`
    font-weight: 400;
    font-size: 36px;

    @media screen and (max-width: 900px) {
        font-size: 56px;
    }

    @media screen and (max-width: 480px) {
        font-size: 36px;
    }
`

export const ConteudoEstados = styled.div`
    display: flex;
    background-color: #f7f7f8;

    @media screen and (max-width: 900px) {
        padding-top: 5%;
    }
`

export const EstadosTitulo = styled.h3`
    margin: 5% 5% 5% 7%;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 48px;
    color: #000000;
    
    @media screen and (max-width: 900px) {
        margin: 2% 0 8% 8%;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const ContainerCidades = styled.div`
    display: flex;
    width: 88vw;
    margin-left: 6%;
    margin-bottom: 5%;
    overflow-x: auto;
    scroll-behavior: smooth;

    @media screen and (max-width: 900px) {
        margin-left: 8%;
    }

    @media screen and (max-width: 480px) {
        margin-bottom: 2%;
        overflow-x: auto;
        scroll-behavior: smooth;
    }
`

export const BotaoPrev = styled.div`
`

export const ImagemPrev = styled.img`
    opacity: 0.9;
    margin-top: 120px;
    cursor: pointer;

    @media screen and (max-width: 480px) {
        height: 40px;
        margin-top: 60px;
    }

`

export const ImagemPrevSecond = styled.img`
    opacity: 0.9;
    margin-top: 120px;
    cursor: pointer;

    @media screen and (max-width: 480px) {
        height: 40px;
        margin-top: 60px;
    }
`

export const Carousel = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    width: 92%;

    ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 480px) {
        overflow-x: auto;
        scroll-behavior: smooth;
        width: 70vw !important;
    }
`

export const LinkCidade = styled(Link)`
    display: flex;
    flex-direction: column;
    background-color: #FEC901;
    border-radius: 30px;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    color: #1A1A1B;
    font-weight: 500;
    font-size: 32px;
    text-align: center;
    width: 500px;
    height: 316px;
    padding-bottom: 5px;
    margin-bottom: 1%;
    margin-right: 2%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.40));
    transition: all 0.3s;

    :hover {
    color: #1A1A1B;
    background-color: #F6980B;
    transition: 0.8s;
    }

    @media screen and (max-width: 480px) {
        border-radius: 20px;
        width: 250px;
        height: 160px;
        font-size: 20px;
        margin-bottom: 20px;
        padding-bottom: 20px;
    }
`

export const ImagemCidade = styled.img`
    width: 500px;
    height: 316px;

    @media screen and (max-width: 480px) {
        width: 250px;
        height: 150px;
    }
`

export const BotaoNext = styled.div`
`

export const ImagemNext = styled.img`
    opacity: 0.9;
    margin-top: 120px;
    cursor: pointer;

    @media screen and (max-width: 480px) {
        height: 40px;
        margin-top: 60px;
    }
`

export const ImagemNextSecond = styled.img`
    opacity: 0.9;
    margin-top: 120px;
    cursor: pointer;

    @media screen and (max-width: 480px) {
        height: 40px;
        margin-top: 60px;
    }
`
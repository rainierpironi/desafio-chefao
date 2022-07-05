import styled from 'styled-components';
import bg from '../../assets/Images/banner-sudeste.svg';
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

export const FraseDestinos = styled.div`
    padding-left: 7%;
    font-family: 'Roboto', sans-serif;
    color: #FFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.95);
`

export const FraseDestinosTitulo = styled.h1`
    font-weight: 700;
    font-size: 52px;
`

export const FraseDestinosSubtitulo = styled.h2`
    font-weight: 400;
    font-size: 36px;
`

export const GradienteBrancoDestino = styled.div`
    background: url(photo-1533035353720-f1c6a75cd8ab.jpg), linear-gradient(111.17deg, rgba(255, 255, 255, 0.02) 0.84%, rgba(255, 255, 255, 0.005) 63.92%);
    mix-blend-mode: normal;
    backdrop-filter: blur(10px);
    width: 100%;
    height: 80px;
    position: absolute;
    top: 1085px;

    @media screen and (max-width: 1400px) {
        top: 760px;
    }
`

export const SetaDestino = styled.a`
    display: flex;
    justify-content: center;
    padding-top: -10px;
`

export const ImagemChevronDestino = styled.img`
    position: absolute;
    top: -40px;
`

export const ConteudoEstados = styled.div`
    display: flex;

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
    width: 90vw;
    margin-left: 7%;
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
    position: absolute;
    top: 1480px;
    left: 90px;
    z-index: 9999;
    cursor: pointer;

    @media screen and (max-width: 1400px) {
        top: 1080px;
        left: 55px;
    }

    @media screen and (max-width: 900px) {
        top: 1030px;
        left: 30px;
    }

    @media screen and (max-width: 480px) {
        height: 40px;
        top: 895px;
        left: 8px;
    }

`

export const ImagemPrevSecond = styled.img`
    opacity: 0.9;
    position: absolute;
    top: 2040px;
    left: 90px;
    z-index: 9999;
    cursor: pointer;

    @media screen and (max-width: 1400px) {
        top: 1590px;
        left: 55px;
    }

    @media screen and (max-width: 900px) {
        top: 1470px;
        left: 30px;
    }

    @media screen and (max-width: 480px) {
        height: 40px;
        top: 1150px;
        left: 8px;
    }
`

export const Carousel = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    width: 93%;

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
    margin-right: 3%;
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
    position: absolute;
    top: 1480px;
    right: 160px;
    z-index: 9999;
    cursor: pointer;

    @media screen and (max-width: 1400px) {
        top: 1080px;
        right: 90px;
    }

    @media screen and (max-width: 900px) {
        top: 1030px;
        right: 55px;
    }

    @media screen and (max-width: 480px) {
        height: 40px;
        top: 895px;
        right: 70px;
    }
`

export const ImagemNextSecond = styled.img`
    opacity: 0.9;
    position: absolute;
    top: 2040px;
    right: 160px;
    z-index: 9999;
    cursor: pointer;

    @media screen and (max-width: 1400px) {
        top: 1590px;
        right: 90px;
    }

    @media screen and (max-width: 900px) {
        top: 1470px;
        right: 55px;
    }

    @media screen and (max-width: 480px) {
        height: 40px;
        top: 1150px;
        right: 70px;
    }
`
import styled from 'styled-components';

export const ContainerSobre = styled.div`
    background-color: #f6f6f7;
    margin: 0 auto;
    padding-top: 10%;
`

export const Titulos = styled.div`
    padding: 0;
`

export const TituloSobre = styled.h2`
    margin-top: 50px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 48px;
    color: #1A1A1B;
    padding-left: 7%;
`

export const SubtituloSobre = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 36px;
    color: #1A1A1B;
    padding-bottom: 4%;
    padding-left: 7%;
`

export const ConteudoSobre = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        padding-bottom: 60%;
    }

    @media screen and (max-width: 480px) {
        padding-bottom: 90%;
    }
`

export const ContaineirVideo = styled.div`
    
`
export const VideoSobre = styled.iframe`
    border-radius: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 900px) {
        margin-top: 2%;
    }

    @media screen and (max-width: 480px) {
        margin-top: 2%;
        width: 300px;
        height: 295px;
    }
`

export const ContainerTextoSobre = styled.div`
    width: 700px;
    height: 400px;
    padding-left: 4%;

    @media screen and (max-width: 900px) {
        width: 445px;
        height: 300px;
        margin-right: 4%;
        margin-top: 2%;
    }

    @media screen and (max-width: 480px) {
        width: 300px;
        height: 230px;
        margin-right: 4%;
        margin-top: 5%;
    }
`

export const TextoSobre = styled.p`
    font-family: 'Roboto Serif', serif;
    font-size: 20px;

    @media screen and (max-width: 900px) {
        font-size: 25px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const GradienteSobre = styled.div`
    background: url(photo-1533035353720-f1c6a75cd8ab.jpg), linear-gradient(111.17deg, rgba(255, 255, 255, 0.02) 0.84%, rgba(255, 255, 255, 0.005) 63.92%);
    mix-blend-mode: normal;
    backdrop-filter: blur(10px);
    width: 100%;
    height: 80px;
    position: absolute;
    top: 1930px;

    @media screen and (max-width: 1400px) {
        top: 1500px;
    }
`

export const SetaSobre = styled.a`
   display: flex;
   justify-content: center;
`

export const ImagemChevronSobre = styled.img`
    position: absolute;
    top: 15px;
`
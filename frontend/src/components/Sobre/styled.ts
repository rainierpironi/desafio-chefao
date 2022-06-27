import styled from 'styled-components';

export const ContainerSobre = styled.div`
    background-color: #FFE3E3;
    padding: 3% 3% 5% 3%;
    margin: 0 auto;
`

export const TituloSobre = styled.h1`
    margin-top: 270px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 48px;
    color: #495057;
    padding-bottom: 2%;
    padding-left: 5%;
`
export const ConteudoSobre = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`

export const ContaineirVideo = styled.div`
    margin-right: 4%;
`
export const VideoSobre = styled.iframe`
    border-radius: 10px;

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
    background-color: #C8C8C8;
    width: 640px;
    height: 450px;
    border-radius: 10px;
    padding: 2%;

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
    font-family: 'DM Sans', sans-serif;
    font-size: 20px;

    @media screen and (max-width: 900px) {
        font-size: 25px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`
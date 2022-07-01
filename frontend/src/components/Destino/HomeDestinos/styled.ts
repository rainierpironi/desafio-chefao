import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerDestinos = styled.div`
   background-color: #2a2b2c;
   mix-blend-mode: normal;
   box-shadow: 0px 1px 24px -1px rgba(0, 0, 0, 0.1);
`

export const ContainerTitulos = styled.div``

export const TituloDestinos = styled.h2`
   font-family: 'Roboto', sans-serif;
   font-weight: 700;
   font-size: 48px;
   color: #FFF;
   padding-left: 5%;
   padding-top: 30px;
   padding-left: 7%;
`

export const SubtituloDestinos = styled.h3`
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   font-size: 36px;
   color: #FFF;
   padding-bottom: 2%;
   padding-left: 5%;
   padding-left: 7%;
`

export const ConteudoDestinos = styled.div`
   justify-content: center;
   margin: 2% 0 8% 7%;

   @media screen and (max-width: 900px) {
      flex-direction: column;
      align-items: center;
   }
`

export const LinkDestino = styled(Link)`

   margin-right: 3%;

   @media screen and (max-width: 900px) {
      margin-right: 4%;
      margin-bottom: 5%;
      padding-bottom: 5%;
      border-radius: 70px;
   }

   @media screen and (max-width: 480px) {
      margin-right: 4%;
      margin-bottom: 5%;
      padding-bottom: 5;
      border-radius: 40px;
   }
`

export const ImagemDestino = styled.img`

   transition: all 0.3s;

   :hover {
      opacity: 50%;
      transition: 0.8s;
   }

   @media screen and (max-width: 900px) {
      width: 400px;
      height: 450px;
   }

   @media screen and (max-width: 480px) {
      width: 300px;
      height: 350px;
   }
`

export const Gradiente2 = styled.div`
   background-color: #1b1b1b;
   background: linear-gradient(0deg, #f6f6f7 35%, #2a2b2c 103%);
   width: 100%;
   height: 100px;
`

export const Seta = styled.a`
   display: flex;
   justify-content: center;
   padding-top: -10px;
`

export const ImagemChevron = styled.img``
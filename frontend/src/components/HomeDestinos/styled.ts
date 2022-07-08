import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerDestinos = styled.div`
   background-color: #2a2b2c;
   mix-blend-mode: normal;
   box-shadow: 0px 1px 24px -1px rgba(0, 0, 0, 0.1);
`

export const ContainerTitulos = styled.div`
   padding-left: 20%;

   @media screen and (max-width: 1400px) {
      padding-left: 10%;
   }
`

export const TituloDestinos = styled.h2`
   font-family: 'Roboto', sans-serif;
   font-weight: 700;
   font-size: 48px;
   color: #FFF;
   padding: 7% 0 0 0;
`

export const SubtituloDestinos = styled.h3`
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   font-size: 36px;
   color: #FFF;
   padding-bottom: 2%;
`

export const ConteudoDestinos = styled.div`
   display: flex;
   justify-content: center;
   padding-bottom: 10%;

   @media screen and (max-width: 1400px) {
      padding-bottom: 10%;
   }

   @media screen and (max-width: 900px) {
      flex-direction: column;
      align-items: center;
   }
`

export const LinkDestino = styled(Link)`

   margin-right: 2%;

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

export const GradienteDestinos = styled.div`
   background: url(photo-1533035353720-f1c6a75cd8ab.jpg), linear-gradient(111.17deg, rgba(255, 255, 255, 0.02) 0.84%, rgba(255, 255, 255, 0.005) 63.92%);
   mix-blend-mode: normal;
   backdrop-filter: blur(10px);
   width: 100%;
   height: 80px;
   position: absolute;
   top: 2680px;

   @media screen and (max-width: 1400px) {
      top: 2180px;
   }
`

export const SetaDestinos = styled.a`
   display: flex;
   justify-content: center;
   padding-top: -10px;
`

export const ImagemChevronDestinos = styled.img`
   position: absolute;
   top: -10px;
`
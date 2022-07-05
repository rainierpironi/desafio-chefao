import styled from 'styled-components';
import fundo from "../../assets/Images/fundo-banner-home.png";

export const containerApoie = styled.div`
    width: 100vw;
    max-width: 100%;
    height: 110vh;
    background-image: url(${fundo});
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    color: white;
    display: flex;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
 `
 
 export const textoApoie = styled.div`
    max-width: 50%;
    margin-top: 10%;
    margin-left: 5%;
    
    h1{
    margin-top: 18vh;
    font-family: 'Roboto', sans-serif;
    font-size: 48px;
    font-weight: 700;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 }
 
 p{
    font-size: 36px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
 }
 `

export const VL = styled.div`
 border-left: 6px solid white;
  height: 25%;
  position: absolute;
  margin-top: -30%;
  left: 90%;
`

export const VL2 = styled.div`
 border-left: 6px solid white;
  height: 25%;
  position: absolute;
  margin-top: 40%;
  left: 90%;
`
export const Link = styled.a`
    font-size: 20px;
  height: 30%;
  position: absolute;
  margin-top: 5%;
  left: 89.2%;
`
export const Link2 = styled.a`
 font-size: 20px;
  height: 30%;
  position: absolute;
  margin-top: 15%;
  left: 89%;
`
export const Link3 = styled.a`
 font-size: 20px;
  height: 30%;
  position: absolute;
  margin-top: 25%;
  left: 88.9%;
`

export const Gradiente = styled.div`
   background: url(photo-1533035353720-f1c6a75cd8ab.jpg), linear-gradient(111.17deg, rgba(255, 255, 255, 0.02) 0.84%, rgba(255, 255, 255, 0.005) 63.92%);
   mix-blend-mode: normal;
   backdrop-filter: blur(10px);
   width: 100%;
   height: 80px;
   position: absolute;
   top: 1120px;

   @media screen and (max-width: 1400px) {
      top: 770px;
   }
`

export const Seta = styled.a`
  display: flex;
  justify-content: center;
  padding-top: -10px;
`

export const ImagemChevron = styled.img`
  position: absolute;
  top: -40px;
`
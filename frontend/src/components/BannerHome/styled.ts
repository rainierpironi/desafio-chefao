import styled from 'styled-components';
import fundo from "../../assets/Images/banner-home.png";

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
    max-width: 38%;
    margin-top: 5%;
    margin-left: 20%;
    
    h1{
    margin-top: 10vh;
    font-family: 'Roboto', sans-serif;
    font-size: 52px;
    font-weight: 700;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.95);
 }
 
 p{
    font-size: 36px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.95);
    width: 90%;
 }

    @media screen and (max-width: 1400px) {
      margin-left: 10%;
      max-width: 50%;

      p {
        width: 100%;
      }
    }

    @media screen and (max-width: 480px) {
      margin-left: 10%;
      max-width: 70%;

      h1 {
        font-size: 36px;
      }

      p {
        width: 100%;
        font-size: 24px;
      }
    }
 `

export const BotaoHome = styled.button`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    border: none;
    background: #FEC901;
    box-shadow: 0px 4.33272px 4.33272px rgba(0, 0, 0, 0.95);
    padding: 10px 50px 10px 50px;
    margin-top: 3%;
    font-size: 28px;
    border-radius: 32.5px;
    color: #424243;
    transition: all 0.3s;
    cursor: pointer;

  :hover {
   background-color: #F6980B;
   transition: 0.5s;
}
`

export const VL = styled.div`
  border-left: 6px solid white;
  height: 25%;
  position: absolute;
  margin-top: 80px;
  left: 80%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.95));

  @media screen and (max-width: 1400px) {
    height: 25%;
    margin-top: 35px;
    left: 90%;
   }

   @media screen and (max-width: 980px) {
    margin-top: 50px;
   }
`

export const VL2 = styled.div`
  border-left: 6px solid white;
  height: 25%;
  position: absolute;
  margin-top: 520px;
  left: 80%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.95));

  @media screen and (max-width: 1400px) {
    margin-top: 410px;
    left: 90%;
   }

   @media screen and (max-width: 980px) {
    margin-top: 500px;
   }
`
export const Link = styled.a`
  font-size: 20px;
  height: 30%;
  position: absolute;
  margin-top: 350px;
  left: 79.5%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.95));

  @media screen and (max-width: 1400px) {
    margin-top: 230px;
    left: 89%;
  }

  @media screen and (max-width: 980px) {
    margin-top: 370px;
    left: 88.5%;
   }
`
export const Link2 = styled.a`
 font-size: 20px;
  height: 30%;
  position: absolute;
  margin-top: 400px;
  left: 79.6%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.95));

  @media screen and (max-width: 1400px) {
    margin-top: 280px;
    left: 89.2%;
  }

  @media screen and (max-width: 980px) {
    margin-top: 405px;
    left: 88.8%;
  }
`
export const Link3 = styled.a`
 font-size: 20px;
  height: 30%;
  position: absolute;
  margin-top: 450px;
  left: 79.5%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.95));

  @media screen and (max-width: 1400px) {
    margin-top: 330px;
    left: 89.1%;
  }

  @media screen and (max-width: 980px) {
    margin-top: 440px;
    left: 88.8%;
  }
`

export const Gradiente = styled.div`
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

export const Seta = styled.a`
  display: flex;
  justify-content: center;
  padding-top: -10px;
`

export const ImagemChevron = styled.img`
  position: absolute;
  top: -40px;
`
export const Container = styled.div`
  position: initial;
  @media (max-width: 768px) {
   display: none;
  }
`
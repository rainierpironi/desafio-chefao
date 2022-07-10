import React from "react";
import * as Styled from "./styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { BotaoHome } from "./styled";

const BannerHome: React.FC = () => {
  return (
    <Styled.containerApoie>
      <Styled.textoApoie>
        <h1>Conectar-se com pares fortalece o ser possível</h1>
        <p>Plataforma para conexão de mulheres que viajam solo em território
          brasileiro</p>
          
        <a id="botao" href="/#conecte-se"><BotaoHome>Conecte-se</BotaoHome></a>
        
        
        
      </Styled.textoApoie>
      <Styled.Container>
        <Styled.VL></Styled.VL>
        <Styled.Link className="p-1 link-light" href="https://www.youtube.com/channel/UCH2nvI91ORL9oFRzF0h-vHA" target="_blank"><FontAwesomeIcon icon={faYoutube} /></Styled.Link>
        <Styled.Link2 className="p-1 link-light" href="https://www.instagram.com/lavaielaig/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Styled.Link2>
        <Styled.Link3 className="p-1 link-light" href="https://www.facebook.com/Lavaiela-107218732053353" target="_blank"><FontAwesomeIcon icon={faFacebook} /></Styled.Link3>
        <Styled.VL2></Styled.VL2>
      </Styled.Container>
    </Styled.containerApoie>
  );
};

export default BannerHome;


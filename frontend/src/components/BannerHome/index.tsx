import React from "react";
import * as Styled from "./styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'

const BannerHome: React.FC = () => {
  return (
    <Styled.containerApoie>
            
                <Styled.textoApoie>
                
                    <h1>Conectar-se com pares fortalece o ser possível</h1>
                    <br />
                    <p>Plataforma para conexão de mulheres que viajam solo em território
          brasileiro</p>
                </Styled.textoApoie>
                <div className="container">
                <Styled.VL></Styled.VL>
                <Styled.Link className="p-1 link-light" href="your link here"><FontAwesomeIcon icon={faInstagram} /></Styled.Link>
                <Styled.Link2 className="p-1 link-light" href="your link here"><FontAwesomeIcon icon={faFacebook} /></Styled.Link2>
                <Styled.Link3 className="p-1 link-light" href="your link here"><FontAwesomeIcon icon={faYoutube} /></Styled.Link3>
                <Styled.VL2></Styled.VL2>
                </div>
                </Styled.containerApoie>
  );
};

export default BannerHome;


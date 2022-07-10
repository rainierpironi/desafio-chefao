import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesSE-Campos-jordao/BannerCidades';
import ConteudoCidades from '../../components/CidadesSE-Campos-jordao/ConteudoCidades';
import FotosCidades from '../../components/CidadesSE-Campos-jordao/FotosCidades';
import ComentarioCidades from '../../components/CidadesSE-Campos-jordao/ComentarioCidades';
import Footer from '../../components/Footer';


const CamposJordao: React.FC = () => {
  return (
      <Container>
          <Header/>
          <BannerCidades/>
          <ConteudoCidades/>
          <FotosCidades/>
          <ComentarioCidades/>
          <Footer/>
      </Container>
      
  );
}

export default CamposJordao;
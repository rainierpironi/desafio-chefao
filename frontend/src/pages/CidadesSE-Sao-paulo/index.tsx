import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesSE-Sao-paulo/BannerCidades';
import ConteudoCidades from '../../components/CidadesSE-Sao-paulo/ConteudoCidades';
import FotosCidades from '../../components/CidadesSE-Sao-paulo/FotosCidades';
import ComentarioCidades from '../../components/CidadesSE-Sao-paulo/ComentarioCidades';
import Footer from '../../components/Footer';


const SaoPaulo: React.FC = () => {
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

export default SaoPaulo;
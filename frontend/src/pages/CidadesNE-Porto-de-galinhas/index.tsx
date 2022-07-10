import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesNE-Porto-de-galinhas/BannerCidades';
import ConteudoCidades from '../../components/CidadesNE-Porto-de-galinhas/ConteudoCidades';
import FotosCidades from '../../components/CidadesNE-Porto-de-galinhas/FotosCidades';
import ComentarioCidades from '../../components/CidadesNE-Porto-de-galinhas/ComentarioCidades';
import Footer from '../../components/Footer';


const PortoGalinhas: React.FC = () => {
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

export default PortoGalinhas;
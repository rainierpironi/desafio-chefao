import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesCO-Campo-grande/BannerCidades';
import ConteudoCidades from '../../components/CidadesCO-Campo-grande/ConteudoCidades';
import FotosCidades from '../../components/CidadesCO-Campo-grande/FotosCidades';
import ComentarioCidades from '../../components/CidadesCO-Campo-grande/ComentarioCidades';
import Footer from '../../components/Footer';


const CampoGrande: React.FC = () => {
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

export default CampoGrande;
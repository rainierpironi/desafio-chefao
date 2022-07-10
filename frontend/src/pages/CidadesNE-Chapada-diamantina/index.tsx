import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesNE-Chapada-diamantina/BannerCidades';
import ConteudoCidades from '../../components/CidadesNE-Chapada-diamantina/ConteudoCidades';
import FotosCidades from '../../components/CidadesNE-Chapada-diamantina/FotosCidades';
import ComentarioCidades from '../../components/CidadesNE-Chapada-diamantina/ComentarioCidades';
import Footer from '../../components/Footer';


const ChapadaDiamantina: React.FC = () => {
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

export default ChapadaDiamantina;
import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesS-Blumenau/BannerCidades';
import ConteudoCidades from '../../components/CidadesS-Blumenau/ConteudoCidades';
import FotosCidades from '../../components/CidadesS-Blumenau/FotosCidades';
import ComentarioCidades from '../../components/CidadesS-Blumenau/ComentarioCidades';
import Footer from '../../components/Footer';


const Blumenau: React.FC = () => {
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

export default Blumenau;
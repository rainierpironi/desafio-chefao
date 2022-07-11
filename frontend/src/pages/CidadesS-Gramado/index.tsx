import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesS-Gramado/BannerCidades';
import ConteudoCidades from '../../components/CidadesS-Gramado/ConteudoCidades';
import FotosCidades from '../../components/CidadesS-Gramado/FotosCidades';
import ComentarioCidades from '../../components/CidadesS-Gramado/ComentarioCidades';
import Footer from '../../components/Footer';


const Gramado: React.FC = () => {
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

export default Gramado;
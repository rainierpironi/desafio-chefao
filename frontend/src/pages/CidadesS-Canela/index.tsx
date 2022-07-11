import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesS-Canela/BannerCidades';
import ConteudoCidades from '../../components/CidadesS-Canela/ConteudoCidades';
import FotosCidades from '../../components/CidadesS-Canela/FotosCidades';
import ComentarioCidades from '../../components/CidadesS-Canela/ComentarioCidades';
import Footer from '../../components/Footer';


const Canela: React.FC = () => {
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

export default Canela;
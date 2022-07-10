import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesS-Florianopolis/BannerCidades';
import ConteudoCidades from '../../components/CidadesS-Florianopolis/ConteudoCidades';
import FotosCidades from '../../components/CidadesS-Florianopolis/FotosCidades';
import ComentarioCidades from '../../components/CidadesS-Florianopolis/ComentarioCidades';
import Footer from '../../components/Footer';


const Florianopolis: React.FC = () => {
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

export default Florianopolis;
import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesS-Joinville/BannerCidades';
import ConteudoCidades from '../../components/CidadesS-Joinville/ConteudoCidades';
import FotosCidades from '../../components/CidadesS-Joinville/FotosCidades';
import ComentarioCidades from '../../components/CidadesS-Joinville/ComentarioCidades';
import Footer from '../../components/Footer';


const Joinville: React.FC = () => {
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

export default Joinville;
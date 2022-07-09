import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesN-Manaus/BannerCidades';
import ConteudoCidades from '../../components/CidadesN-Manaus/ConteudoCidades';
import FotosCidades from '../../components/CidadesN-Manaus/FotosCidades';
import ComentarioCidades from '../../components/CidadesN-Manaus/ComentarioCidades';
import Footer from '../../components/Footer';


const Manaus: React.FC = () => {
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

export default Manaus;
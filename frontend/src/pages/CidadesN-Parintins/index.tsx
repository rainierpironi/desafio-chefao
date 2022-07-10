import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesN-Parintins/BannerCidades';
import ConteudoCidades from '../../components/CidadesN-Parintins/ConteudoCidades';
import FotosCidades from '../../components/CidadesN-Parintins/FotosCidades';
import ComentarioCidades from '../../components/CidadesN-Parintins/ComentarioCidades';
import Footer from '../../components/Footer';


const Parintins: React.FC = () => {
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

export default Parintins;
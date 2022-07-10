import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesCO-Bonito/BannerCidades';
import ConteudoCidades from '../../components/CidadesCO-Bonito/ConteudoCidades';
import FotosCidades from '../../components/CidadesCO-Bonito/FotosCidades';
import ComentarioCidades from '../../components/CidadesCO-Bonito/ComentarioCidades';
import Footer from '../../components/Footer';


const Bonito: React.FC = () => {
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

export default Bonito;
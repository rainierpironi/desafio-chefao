import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesCO-Bodoquena/BannerCidades';
import ConteudoCidades from '../../components/CidadesCO-Bodoquena/ConteudoCidades';
import FotosCidades from '../../components/CidadesCO-Bodoquena/FotosCidades';
import ComentarioCidades from '../../components/CidadesCO-Bodoquena/ComentarioCidades';
import Footer from '../../components/Footer';


const Bodoquena: React.FC = () => {
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

export default Bodoquena;
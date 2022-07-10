import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesCO-Caldas-novas/BannerCidades';
import ConteudoCidades from '../../components/CidadesCO-Caldas-novas/ConteudoCidades';
import FotosCidades from '../../components/CidadesCO-Caldas-novas/FotosCidades';
import ComentarioCidades from '../../components/CidadesCO-Caldas-novas/ComentarioCidades';
import Footer from '../../components/Footer';


const CaldasNovas: React.FC = () => {
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

export default CaldasNovas;
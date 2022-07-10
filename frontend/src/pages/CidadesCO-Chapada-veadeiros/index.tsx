import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesCO-Chapada-veadeiros/BannerCidades';
import ConteudoCidades from '../../components/CidadesCO-Chapada-veadeiros/ConteudoCidades';
import FotosCidades from '../../components/CidadesCO-Chapada-veadeiros/FotosCidades';
import ComentarioCidades from '../../components/CidadesCO-Chapada-veadeiros/ComentarioCidades';
import Footer from '../../components/Footer';


const ChapadaVeadeiros: React.FC = () => {
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

export default ChapadaVeadeiros;
import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesCO-Pirenopolis/BannerCidades';
import ConteudoCidades from '../../components/CidadesCO-Pirenopolis/ConteudoCidades';
import FotosCidades from '../../components/CidadesCO-Pirenopolis/FotosCidades';
import ComentarioCidades from '../../components/CidadesCO-Pirenopolis/ComentarioCidades';
import Footer from '../../components/Footer';


const Pirenopolis: React.FC = () => {
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

export default Pirenopolis;
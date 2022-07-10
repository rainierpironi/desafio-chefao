import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesSE-Petropolis/BannerCidades';
import ConteudoCidades from '../../components/CidadesSE-Petropolis/ConteudoCidades';
import FotosCidades from '../../components/CidadesSE-Petropolis/FotosCidades';
import ComentarioCidades from '../../components/CidadesSE-Petropolis/ComentarioCidades';
import Footer from '../../components/Footer';


const Petropolis: React.FC = () => {
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

export default Petropolis;
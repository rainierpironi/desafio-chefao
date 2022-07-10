import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesSE-Ilhabela/BannerCidades';
import ConteudoCidades from '../../components/CidadesSE-Ilhabela/ConteudoCidades';
import FotosCidades from '../../components/CidadesSE-Ilhabela/FotosCidades';
import ComentarioCidades from '../../components/CidadesSE-Ilhabela/ComentarioCidades';
import Footer from '../../components/Footer';


const Ilhabela: React.FC = () => {
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

export default Ilhabela;
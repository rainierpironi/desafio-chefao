import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesSE-Rio-de-janeiro/BannerCidades';
import ConteudoCidades from '../../components/CidadesSE-Rio-de-janeiro/ConteudoCidades';
import FotosCidades from '../../components/CidadesSE-Rio-de-janeiro/FotosCidades';
import ComentarioCidades from '../../components/CidadesSE-Rio-de-janeiro/ComentarioCidades';
import Footer from '../../components/Footer';


const RioJaneiro: React.FC = () => {
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

export default RioJaneiro;
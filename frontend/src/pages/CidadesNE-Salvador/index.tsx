import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesNE-Salvador/BannerCidades';
import ConteudoCidades from '../../components/CidadesNE-Salvador/ConteudoCidades';
import FotosCidades from '../../components/CidadesNE-Salvador/FotosCidades';
import ComentarioCidades from '../../components/CidadesNE-Salvador/ComentarioCidades';
import Footer from '../../components/Footer';


const Salvador: React.FC = () => {
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

export default Salvador;
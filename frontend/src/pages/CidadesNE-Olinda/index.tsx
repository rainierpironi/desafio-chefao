import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesNE-Olinda/BannerCidades';
import ConteudoCidades from '../../components/CidadesNE-Olinda/ConteudoCidades';
import FotosCidades from '../../components/CidadesNE-Olinda/FotosCidades';
import ComentarioCidades from '../../components/CidadesNE-Olinda/ComentarioCidades';
import Footer from '../../components/Footer';


const Olinda: React.FC = () => {
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

export default Olinda;
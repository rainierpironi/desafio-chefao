import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesNE-Trancoso/BannerCidades';
import ConteudoCidades from '../../components/CidadesNE-Trancoso/ConteudoCidades';
import FotosCidades from '../../components/CidadesNE-Trancoso/FotosCidades';
import ComentarioCidades from '../../components/CidadesNE-Trancoso/ComentarioCidades';
import Footer from '../../components/Footer';


const Trancoso: React.FC = () => {
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

export default Trancoso;
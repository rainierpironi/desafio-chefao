import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesNE-Recife/BannerCidades';
import ConteudoCidades from '../../components/CidadesNE-Recife/ConteudoCidades';
import FotosCidades from '../../components/CidadesNE-Recife/FotosCidades';
import ComentarioCidades from '../../components/CidadesNE-Recife/ComentarioCidades';
import Footer from '../../components/Footer';


const Recife: React.FC = () => {
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

export default Recife;
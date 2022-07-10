import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesN-Belem/BannerCidades';
import ConteudoCidades from '../../components/CidadesN-Belem/ConteudoCidades';
import FotosCidades from '../../components/CidadesN-Belem/FotosCidades';
import ComentarioCidades from '../../components/CidadesN-Belem/ComentarioCidades';
import Footer from '../../components/Footer';


const Belem: React.FC = () => {
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

export default Belem;
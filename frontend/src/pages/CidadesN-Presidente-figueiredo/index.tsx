import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesN-Presidente-figueiredo/BannerCidades';
import ConteudoCidades from '../../components/CidadesN-Presidente-figueiredo/ConteudoCidades';
import FotosCidades from '../../components/CidadesN-Presidente-figueiredo/FotosCidades';
import ComentarioCidades from '../../components/CidadesN-Presidente-figueiredo/ComentarioCidades';
import Footer from '../../components/Footer';


const PresidenteFigueiredo: React.FC = () => {
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

export default PresidenteFigueiredo;
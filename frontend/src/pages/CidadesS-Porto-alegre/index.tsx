import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesS-Porto-alegre/BannerCidades';
import ConteudoCidades from '../../components/CidadesS-Porto-alegre/ConteudoCidades';
import FotosCidades from '../../components/CidadesS-Porto-alegre/FotosCidades';
import ComentarioCidades from '../../components/CidadesS-Porto-alegre/ComentarioCidades';
import Footer from '../../components/Footer';


const PortoAlegre: React.FC = () => {
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

export default PortoAlegre;
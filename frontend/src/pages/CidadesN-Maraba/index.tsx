import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesN-Maraba/BannerCidades';
import ConteudoCidades from '../../components/CidadesN-Maraba/ConteudoCidades';
import FotosCidades from '../../components/CidadesN-Maraba/FotosCidades';
import ComentarioCidades from '../../components/CidadesN-Maraba/ComentarioCidades';
import Footer from '../../components/Footer';


const Maraba: React.FC = () => {
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

export default Maraba;
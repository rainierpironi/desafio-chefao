import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesN-Alter-do-chao/BannerCidades';
import ConteudoCidades from '../../components/CidadesN-Alter-do-chao/ConteudoCidades';
import FotosCidades from '../../components/CidadesN-Alter-do-chao/FotosCidades';
import ComentarioCidades from '../../components/CidadesN-Alter-do-chao/ComentarioCidades';
import Footer from '../../components/Footer';


const AlterChao: React.FC = () => {
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

export default AlterChao;
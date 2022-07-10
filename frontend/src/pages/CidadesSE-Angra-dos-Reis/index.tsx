import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import BannerCidades from '../../components/CidadesSE-Angra-dos-Reis/BannerCidades';
import ConteudoCidades from '../../components/CidadesSE-Angra-dos-Reis/ConteudoCidades';
import FotosCidades from '../../components/CidadesSE-Angra-dos-Reis/FotosCidades';
import ComentarioCidades from '../../components/CidadesSE-Angra-dos-Reis/ComentarioCidades';
import Footer from '../../components/Footer';


const AngraReis: React.FC = () => {
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

export default AngraReis;
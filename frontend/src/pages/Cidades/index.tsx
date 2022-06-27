import React from 'react';
import Container from '../../components/Container';
import BannerCidades from '../../components/Cidades/BannerCidades';
import ConteudoCidades from '../../components/Cidades/ConteudoCidades';
import ComentarioCidades from '../../components/Cidades/ComentarioCidades';


const Cidades: React.FC = () => {
  return (
      <Container>
          <BannerCidades/>
          <ConteudoCidades/>
          <ComentarioCidades/>
      </Container>
      
  );
}

export default Cidades;
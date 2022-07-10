import React from 'react';
import { Fragment } from "react";

import './conteudo-cidades.css';

const ConteudoCidades: React.FC = () => {
  return (
    <Fragment>

      <div className='conteudo-principal'>
        <h1 id='conteudo'>Campos do Jordão</h1>
        <h2>"Suiça Brasileira"</h2>
        <p>
          Fondue, música clássica, arquitetura enxaimel, montanhas... são muitos os ingredientes que fazem de Campos do Jordão uma das cidades mais visitadas do estado de São Paulo. Capital do inverno paulista por excelência, a Suíça brasileira recebe milhares de visitantes o ano todo - sobretudo no mês de julho, quando se enfeita para o Festival Internacional de Inverno.
        </p>
        <p>
          Entre suas muitas faces, Campos do Jordão se destaca pela diversão. Jovens nas ruas, por vezes ostentando carros importados, chopperias animadas e badalação não faltam. Os mais românticos, porém, encontram no frio serrano e nas pousadas charmosas o clima ideal. Campos é também um importante polo gastronômico, com alguns restaurantes premiados.
        </p>
        <p>
          Nada disso lhe interessa? A cidade oferece cada vez mais opções para aproveitar a natureza e suas belas paisagens. Centros de esportes radicais, caminhadas e cavalgadas estão entre as atividades mais  procuradas e agradam todas as idades.
        </p>
        <p>
          No entanto nem tudo são flores e folhas de plátano em Campos do Jordão. A reclamação mais comum se refere aos preços da hospedagem e dos restaurantes. Além disso, o pequeno distrito do Capivari, epicentro das atividades, tem grandes problemas de trânsito e falta de opções de estacionamento durante a temporada. A cidade sofre ainda com uma péssima distribuição de renda, com muitos casebres se estendendo por seus morros na região da Albernéssia.
        </p>
        <p>
          Sim, Campos do Jordão está longe da perfeição; mas isso não impede que ela seja o melhor destino de inverno do estado e um dos principais do Brasil, atraindo cada vez mais visitantes de outros cantos brasileiros e de outros países. Basta atravessar o belo portal para entender o motivo: trata-se da mais suíça de todas as cidades brasileiras.
        </p>
      </div>
    </Fragment>

  );
}

export default ConteudoCidades;
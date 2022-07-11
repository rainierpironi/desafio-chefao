import React from 'react';
import { Fragment } from "react";

import './conteudo-cidades.css';

const ConteudoCidades: React.FC = () => {
  return (
    <Fragment>

      <div className='conteudo-principal'>
        <h1 id='conteudo'>Joinville</h1>
        <h2>Cidade dos Príncipes</h2>
        <p>
          A maior cidade de Santa Catarina tem atrações para todos os gostos: de mirantes a passeios de barco, do maior festival de dança do mundo a restaurantes que cabem no bolso. Colonizada por alemães, suíços e noruegueses, há muito o que fazer em Joinville. Mesmo se sua visita for de passagem, pode ser interessante dedicar um ou dois dias nessa região. Se tiver a oportunidade de vir em julho, o Festival de Dança é o maior do mundo e atrai turistas de todo o Brasil.
        </p>
        <p>
          O Pórtico de Joinville é um dos principais cartões-postais. Construído no estilo enxaimel, influenciado pelas culturas alemã e holandesa, o monumento é de 1979 e abriga hoje um escritório da Secretaria de Turismo. Além disso, ao lado fica o famoso moinho, onde funciona uma das unidades da Cervejaria Opa Bier. Com mesinhas ao ar livre, é um ótimo local para apreciar a cerveja mais famosa da região.
        </p>
        <p>
          O Mirante de Joinville proporciona uma das vistas mais lindas e em todos os ângulos da cidade.
          Além do Pórtico, outros lugares fotogênicos para ver a arquitetura enxaimel, uma herança principalmente dos alemães, são o Mercado Público Municipal e a Estação da Memória, a antiga estação ferroviária construída em 1906. Essa técnica de construção utiliza madeiras que se encaixam sem uso de pregos nem parafuso.
        </p>
        <p>
          Mudas vidas do Jardim Botânico do Rio de Janeiro deram origem à Rua das Palmeiras de Joinville, uma das mais bonitas da cidade, cercada por diversas “colunas de árvores”. Hoje esse calçadão entre as ruas Rio Branco e do Príncipe levam ao Museu Nacional de Imigração e Colonização. Vale incluir no seu roteiro, alguns museus que contam a história da região. O MNIC guarda documentos e objetos que contam a história da imigração no Sul do Brasil. Aliás, esse é o melhor lugar pra entender por que Joinville é conhecida como “Cidade dos Príncipes”, apelido que se refere ao fato de a filha de D. Pedro I ter se casado com o francês François Ferdinand, o príncipe da cidade, que recebeu como dote um pedaço de terra na região.
        </p>
      </div>
    </Fragment>

  );
}

export default ConteudoCidades;
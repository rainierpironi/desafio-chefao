import React from 'react';
import { Fragment } from "react";

import './conteudo-cidades.css';

const ConteudoCidades: React.FC = () => {
  return (
    <Fragment>

      <div className='conteudo-principal'>
        <h1 id='conteudo'>Canela</h1>
        <h2>Serra Gaúcha</h2>
        <p>
          Localizada na Região das Hortênsias, Canela começou sua história em 1903, quando a região passou a ser dominada por imigrantes e colonizadores europeus, sobretudo de origem alemã e italiana.
        </p>
        <p>
          Seu nome vem de uma árvore que ficava na região central de onde hoje é a cidade. Em seu lugar, está a Praça João Corrêa. Era onde os tropeiros se encontravam durante suas longas jornadas.
        </p>
        <p>
          Gradualmente, a cidade se tornou destino de visitantes que buscavam um local fresco e próximo à natureza para passar o verão. Até que se tornou um dos destinos mais famosos até os dias atuais, como parte do circuito serrano.
        </p>
        <p>
          Brasileiros e visitantes de outros países vão em busca de suas vinícolas e gastronomia, uma adaptação muito bem-feita do que é encontrado no Brasil com as nuances europeias.
        </p>
        <p>
          Aliás, comer bem em Canela é sinônimo de sua história, pois a cidade abraçou suas origens com o toque exato da gastronomia alemã e a mão de ouro da cozinha italiana.
        </p>
        <p>
          Há, também, o artesanato local, baseado na confecção de couro, algo típico visto nas roupas e em peças ornamentais nas típicas casas gaúchas.
        </p>
        <p>
          Por isso, sua história abraçou muito mais do que é visto nas ruas. Ela conta com as origens de colonização, sim, mas também de muita apreciação da natureza e uma boa pegada urbana.
        </p>
      </div>
    </Fragment>

  );
}

export default ConteudoCidades;
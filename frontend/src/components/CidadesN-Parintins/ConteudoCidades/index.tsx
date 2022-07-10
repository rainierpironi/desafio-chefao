import React from 'react';
import { Fragment } from "react";

import './conteudo-cidades.css';

const ConteudoCidades: React.FC = () => {
  return (
    <Fragment>

      <div className='conteudo-principal'>
        <h1 id='conteudo'>Parintins</h1>
        <h2>Ilha da Fantasia</h2>

        <p>
          Parintins, sede do arquipélago das Ilhas Tupinambaranas, é um município amazonense localizado a 369 quilômetros de Manaus, capital do Amazonas, na região da divisa com o Pará. É palco de uma das maiores manifestações culturais do país: o Festival Folclórico de Parintins, um duelo entre os bois bumbás Caprichoso, representado pelas cores azul e branco, e Garantido, com as cores vermelho e branco.
        </p>
        <p>
          Com mais de 100 mil habitantes, Parintins fervilha no período do festival, quando praticamente dobra a população com os turistas que invadem a ilha. A paixão pelos bois está espalhada por todos os cantos da cidade.
        </p>
        <p>
          Apesar de voltada para o festival, a cidade tem outros apelos turísticos ainda pouco explorados: é cercada por belos e piscosos lagos e conta nas proximidades com praias de areias brancas, que têm seu auge no verão amazônico, entre agosto e outubro.
        </p>
        <p>
          Localizada na margem direita do rio Amazonas, Parintins só é acessível por barco ou avião:
          Avião: Há voos diretos Manaus-Parintins, que podem durar 1 hora ou 40 minutos, dependendo do avião. No período do festival os voos têm várias frequências diárias. Mesmo assim, o ideal é adquirir a passagem com antecedência. Fora do período do festival, a MAP é a empresa aérea que oferece voos diários para Parintins.
        </p>
        <p>
          Barco – A viagem demora de oito a 24 horas, dependendo da embarcação. No período do festival, os barcos de linha saem do porto da Manaus Moderna e ficam ancorados na orla de Parintins até o final do festival. O viajante pode atar sua rede e dormir no barco. Nesse tipo de embarcação, que leva em média 200 passageiros, a viagem demora entre 18h e 24h. O retorno é mais demorado, em média 24h.
        </p>
        <p>
          As passagens são compradas em guichês no porto da Manaus Moderna, na Zona Sul de Manaus, ou direto com os proprietários dos barcos.
        </p>
      </div>
    </Fragment>



  );
}

export default ConteudoCidades;
import React from 'react';
import { Fragment } from "react";

import './conteudo-cidades.css';

const ConteudoCidades: React.FC = () => {
  return (
    <Fragment>

      <div className='conteudo-principal'>
        <h1 id='conteudo'>Angra dos Reis</h1>
        <h2>Costa Verde</h2>
        <p>
          Angra dos Reis fica no litoral do Rio de Janeiro e formada por 365 ilhas com mar transparente e uma beleza sem igual. Ilha Grande é a maior entre as ilhas de Angra dos Reis. A única forma de acessar a ilha é de barco, carros não são permitidos, o que garante um clima de total tranquilidade.
        </p>
        <p>
          A Vila do Abraão é a área mais “urbanizada” e concentra o comércio da ilha, como bares, restaurantes e lojas de souvenir. Ainda assim, é bastante simples. É de lá que saem também os passeios de lancha. Entre os roteiros mais famosos estão o Volta à Ilha, o Meia Volta e o Super Sul, com diferentes paradas.
        </p>
        <p>
          As principais praias de Ilha Grande são a Praia do Aventureiro, a Praia de Lopes Mendes e a pequena Praia do Caxadaço. Além dos passeios de barco, as trilhas são outra possibilidade do que fazer em Ilha Grande, há opções mais tranquilas e outras com maior nível de dificuldade. Se escolher rotas mais complexas, lembre-se da importância de estar acompanhado por um guia. A Lagoa Azul, é um verdadeiro aquário natural para quem busca relaxar ou praticar esportes náuticos, como snorkeling, caiaque e mergulho.
        </p>
        <p>
          Não são só as praias que fazem sucesso em Angra dos Reis. As cachoeiras também são paradas obrigatórias. E podem ser acessadas por meio de trilhas, o que garante, durante todo o percurso até a queda d’água, um contato com as fauna e flora locais.
          Outros passeios indispensáveis são: a Cachoeira da Feiticeira e a Cachoeira Poção do Abraão.
        </p>
        <p>
          Para um panorama incomparável de Angra dos Reis, a dica é um passeio até o Pico do Papagaio, segundo ponto mais alto da Ilha Grande. Para chegar até a atração, é necessário enfrentar uma trilha de quase 2h em meio à mata fechada. O esforço, porém, vale a pena: de lá é possível avistar toda a Ilha Grande e, se o tempo estiver limpo, a Pedra da Gávea, na Zona Sul do Rio de Janeiro também.
        </p>
      </div>
    </Fragment>

  );
}

export default ConteudoCidades;
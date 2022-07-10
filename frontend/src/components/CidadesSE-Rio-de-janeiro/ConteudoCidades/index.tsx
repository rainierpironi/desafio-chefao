import React from 'react';
import { Fragment } from "react";

import './conteudo-cidades.css';

const ConteudoCidades: React.FC = () => {
  return (
    <Fragment>

      <div className='conteudo-principal'>
        <h1 id='conteudo'>Rio de Janeiro</h1>
        <h2>Cidade Maravilhosa</h2>
        <p>
          O Rio de Janeiro, é a cidade brasileira mais conhecida no exterior tem a fama de possuir um povo alegre, ávido por sol, praia, futebol e samba. Mas o Rio vai muito além disso: tem história. Foi sede da colônia, abrigo da corte portuguesa e depois capital do Brasil, fundamental para que se desenvolvesse em diversos aspectos.
        </p>
        <p>
          Conhecido como cidade Cidade Maravilhosa, tudo começou com um registro no jornal “O Paiz” de fevereiro de 1904, durante o carnaval carioca. Mais tarde, em 1935, o termo foi usado na criação da marchinha “Cidade Maravilhosa”, que se tornou o hino do RJ anos mais tarde. Com praias lindas e águas azuis, abraçada pelas montanhas, uma arquitetura centenária que se destaca em meio arranhas-céus contemporâneos, contrasta com a natureza da mata atlântica, portanto motivos não faltam para ser a Cidade Maravilhosa.
        </p>
        <p>
          Além disso, o Rio de Janeiro concentra tudo que uma cidade do mais alto padrão pode oferecer: muitos restaurantes, peças teatrais, passeios culturais, boa vida noturna, compras, áreas arborizadas para caminhadas ao ar livre, é sede de grandes empresas, é a segunda maior metrópole do país e, claro, tem praias deslumbrantes. É a própria miscigenação da cultura do povo brasileiro. Oferece atrações para todos os gostos e idades, sendo o mais famoso ponto turístico do Rio, o Cristo Redentor.
        </p>
        <p>
          Admirar a vista do Pão de Açúcar, pedalar por Ipanema, relaxar no Jardim Botânico, tomar um café no Forte Copacabana, curtir a noite na Lapa e passear no Museu do Amanhã, são algumas das dezenas de atrações que o Rio reserva aos seus visitantes. Além dos grandes eventos que o Rio sedia, como o Carnaval das escolas de samba e dos blocos de rua, e o Réveillon, com uma queima de fogos que reúne milhões de pessoas!
        </p>
        <p>
          O admirável da cidade é combinar seu turismo urbano e paisagens naturais. Mesmo com a violência, que infelizmente faz parte da realidade, o Rio segue sendo a nossa cidade maravilhosa!
        </p>
      </div>
    </Fragment>

  );
}

export default ConteudoCidades;
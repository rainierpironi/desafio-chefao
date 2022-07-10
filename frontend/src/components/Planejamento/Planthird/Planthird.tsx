import React, { Fragment } from 'react'
import { Accordion } from 'react-bootstrap'
import "../Planthird/Planthird.css"

function Planthird() {
    return (
        <Fragment>
            <div className='containerThird'>
                <div className='milhasPlan'>Milhas Aéreas</div>
                <div className='scrollMilhas'>
                    <Accordion >
                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="0">
                                <div className='sombra'>
                                    <Accordion.Header>O que são milhas aéreas ?</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    As milhas são como uma retribuição das companhias aéreas a clientes pelo uso de seus serviços, uma moeda de troca: quanto mais viagens ou serviços eu adquiro, mais milhas eu acumulo. E, com estas, é possível emitir uma passagem aérea. É uma estratégia das empresas para fidelizar clientes.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="1">
                                <div className='sombra'>
                                    <Accordion.Header>Dicas para acumular milhas aéreas</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    <b>ESCOLHA UM PROGRAMA DE FIDELIDADE </b> de companhias aéreas como, LATAM Pass (Latam), Smiles (Gol) e/ou TudoAzul (Azul). Opte pelo melhor para você, pensando em qual companhia você mais utilizou nos últimos 12 meses e, em seguida, cadastra-se. <b>TENHA UM CARTÃO DE CRÉDITO QUE ACUMULE PONTOS </b>para acumular milhas e acelerar este processo. Com relação aos pontos acumulados no cartão de crédito, a maioria deles juntam 1 milha a cada dólar gasto, ou seja, é preciso converter o valor da sua fatura para dólar para saber o quanto você acumulou em milhas. Além disso, saiba qual a validade dos benefícios para evitar que eles expirem antes de serem utilizados. <b> CONHEÇA AS PARCERIAS ENTRE OS PROGRAMAS DE FIDELIDADE </b> 
                                     para trocar os pontos acumulados nos cartões de crédito por milhas. Quanto mais parceiras a plataforma da companhia aérea tiver, melhor. <b> POTENCIALIZE OS GANHOS NA TRANSFERÊNCIA </b>aproveitando as promoções para acumular pontos transferindo de um programa para outro. Nessas ocasiões as plataformas oferecem bônus ao realizar esse tipo de operação. Elas são bem comuns entre os programas de cartões de crédito e companhias aéreas. Com elas os participantes podem ganhar de 30% a 120% de pontos extras.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    </Accordion>
                </div>
            </div >
        </Fragment>
    )
}

export default Planthird
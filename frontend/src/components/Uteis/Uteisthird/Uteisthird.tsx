import React, { Fragment } from 'react'
import { Accordion } from 'react-bootstrap'
import "../Uteisthird/Uteisthird.css"

function Uteisthird() {
    return (
        <Fragment>
            <div className='containerUteisThird'>
                <div className='milhasUteisThird'>Delegacia do Turista</div>
                <div className='scrollUteisThird'>
                    <Accordion >
                        <div className='adjustUteisThird'>
                            <Accordion.Item eventKey="0">
                                <div className='sombra'>
                                    <Accordion.Header>Delegacias do Turista no Norte</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    <b>AMAZONAS</b> Delegacia Especializada em Crimes contra o Turista - DECCT – Mezanino do Porto de Manaus e Aeroporto – Manaus/AM  (92) 3652-1656/ 3233-0739
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="1">
                                <div className='sombra'>
                                    <Accordion.Header>Delegacias do Turista no Nordeste</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    <b>BAHIA </b>
                                    Delegacia de Proteção ao Turista - DELTUR
                                    Cruzeiro de São Francisco – Pç. Anchieta nº 14.
                                    Bairro: Centro Histórico – Salvador/BA
                                    Telefone: (71) 3116-6817
                                    <b> CEARÁ </b>
                                    Delegacia de Apoio ao Turista – DEPROTUR
                                    Rua Costa Barro Nº1971 – Fortaleza/CE
                                    Telefone: (85) 3101-2488
                                    <b> PARAÍBA </b>
                                    Delegacia de Apoio ao Turista
                                    Av. Almirante Tamandaré, nº100 – João Pessoa/PB
                                    Telefone: (83) 3214-8022/ 32478405
                                    <b> PERNAMBUCO </b>
                                    Delegacia de Polícia do Turista – DPTUR
                                    Aeroporto Internacional dos Guararapes – Recife/PE
                                    Telefone: (81) 3184-3437/ 3322-4088/ 3322-4867/ 3184-3438
                                    <b> RIO GRANDE DO NORTE </b>
                                    Delegacia Especializada em Assistência ao Turista e Meio
                                    Ambiente – DEATUR/ DEPREMA
                                    Praia Shopping – Ponta Negra
                                    Avenida Engenheiro Roberto Freire, 8790 – Ponta Negra – Natal/RN
                                    Telefone: (84) 3232-7402
                                    <b> SERGIPE </b>
                                    Delegacia Especial de Turismo
                                    Praça Santos Dumont, Box 1710 – Atalaia – Aracaju/SE
                                    Telefone: (79) 3198-1118
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="2">
                                <div className='sombra'>
                                    <Accordion.Header>Delegacias do Turista no Centro-Oeste</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    <b>MATO GROSSO DO SUL </b> Delegacia Especializada de Repressão a Crimes Ambientais e Proteção ao Turista, DECAT (67) 3368-6144
                                    Aeroporto Internacional (Mezanino) – Campo Grande/MS
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="3">
                                <div className='sombra'>
                                    <Accordion.Header>Delegacias do Turista no Sudeste</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    <b>ESPÍRITO SANTO </b> Delegacia de Apoio ao Turista, DPTUR (27) 3137-9117, Avenida Américo Buaiz, 200, Enseada do Suá, Vitória/ES
                                    <b> SÃO PAULO </b> Delegacia Especializada no Atendimento ao Turista, DEATUR  (11) 3257-4475, Rua Cantareira Nº390, Centro – São Paulo/SP <b> RIO DE JANEIRO </b> Delegacia Especial de Apoio ao Turismo, DEAT (21) 2332-2924/ 2332-2885/ 2332-2889, Avenida Afrânio de Melo Franco, 159 – Leblon – Rio de Janeiro/RJ
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="4">
                                <div className='sombra'>
                                    <Accordion.Header>Delegacias do Turista no Sul</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                <b>SANTA CATARINA </b> Delegacia de Proteção ao Turista, DPTUR (48) 3665-5723, Avenida Paulo Fontes,1101 Centro – Florianópolis/SC <b> RIO GRANDE DO SUL </b>Delegacia de Apoio ao Turista, DPTUR (51) 3358-2255, Setor de Desembarque do Aeroporto Salgado Filho – Porto Alegre/RS
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    </Accordion>
                </div>
            </div >
        </Fragment>
    )
}
export default Uteisthird
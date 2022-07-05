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
                                    Amazonas
                                    Delegacia Especializada em Crimes contra o Turista - DECCT
                                    Mezanino do Porto de Manaus e Aeroporto – Manaus/AM
                                    Telefone: (92) 3652-1656/ 3233-0739
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>


                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="1">
                                <div className='sombra'>
                                    <Accordion.Header>Delegacias do Turista no Nordeste</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    Bahia
                                    Delegacia de Proteção ao Turista - DELTUR
                                    Cruzeiro de São Francisco – Pç. Anchieta nº 14.
                                    Bairro: Centro Histórico – Salvador/BA
                                    Telefone: (71) 3116-6817

                                    Ceará
                                    Delegacia de Apoio ao Turista – DEPROTUR
                                    Rua Costa Barro Nº1971 – Fortaleza/CE
                                    Telefone: (85) 3101-2488

                                    Paraíba
                                    Delegacia de Apoio ao Turista
                                    Av. Almirante Tamandaré, nº100 – João Pessoa/PB
                                    Telefone: (83) 3214-8022/ 32478405

                                    Pernambuco
                                    Delegacia de Polícia do Turista – DPTUR
                                    Aeroporto Internacional dos Guararapes – Recife/PE
                                    Telefone: (81) 3184-3437/ 3322-4088/ 3322-4867/ 3184-3438

                                    Rio Grande do Norte
                                    Delegacia Especializada em Assistência ao Turista e Meio
                                    Ambiente – DEATUR/ DEPREMA
                                    Praia Shopping – Ponta Negra
                                    Avenida Engenheiro Roberto Freire, 8790 – Ponta Negra – Natal/RN
                                    Telefone: (84) 3232-7402

                                    Sergipe
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
                                Mato Grosso do Sul
Mato Grosso do Sul 
Delegacia Especializada de Repressão a Crimes Ambientais e Proteção ao Turista – DECAT
Av. Duque de Caxias, s/n°
Aeroporto Internacional (Mezanino) – Campo Grande/MS
Telefone: (67) 3368-6144






                                </Accordion.Body>
                            </Accordion.Item>
                        </div>

                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="3">
                                <div className='sombra'>
                                    <Accordion.Header>Delegacias do Turista no Sudeste</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                Espírito Santo
Delegacia de Apoio ao Turista – DPTUR
Avenida Américo Buaiz, 200, Enseada do Suá (Shopping Vitória) – Vitória/ES
Telefone: (27) 3137-9117

São Paulo
Delegacia Especializada no Atendimento ao Turista – DEATUR
Rua Cantareira Nº390, Centro – São Paulo/SP
Telefone: (11) 3257-4475

Rio de Janeiro
Delegacia Especial de Apoio ao Turismo – DEAT
Avenida Afrânio de Melo Franco, 159 – Leblon – Rio de Janeiro/RJ
Telefone: (21) 2332-2924/ 2332-2885/ 2332-2889






                                </Accordion.Body>
                            </Accordion.Item>
                        </div>

                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="4">
                                <div className='sombra'>
                                    <Accordion.Header>Delegacias do Turista no Sul</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                Santa Catarina
Delegacia de Proteção ao Turista – DPTUR
Avenida Paulo Fontes,1101 Centro – Florianópolis/SC
Telefone: (48) 3665-5723

Rio grande do Sul
Delegacia de Apoio ao Turista – DPTUR
Setor de Desembarque do Aeroporto Salgado Filho – Porto Alegre/RS
Telefone: (51) 3358-2255
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
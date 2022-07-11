import React, { Fragment } from 'react'
import { Accordion } from 'react-bootstrap'
import "../Plansecond/Plansecond.css"

function Plansecond() {
    return (
        <Fragment>
            <div className='containerPlanSecond'>
                <div className='tituloPlanSecond'>
                    <p>Aeroportos</p>
                </div>
                <div className='dropPlanSecond'>
                    <Accordion >
                        <div className='adjustPlanSecond'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Aeroportos do Norte</Accordion.Header>
                                <Accordion.Body>
                                    <b>ACRE </b> Aeroporto Internacional de Rio Branco Plácido de Castro, (68) 3211-1003, Avenida Plácido de Castro, s/n, Vila Aeroporto, Rio Branco/AC, 69923-900 <b>AMAZONAS </b> Aeroporto Internacional Manaus AM Eduardo Gomes, (92) 3652-1210, Avenida Santos Dumont, 1350, Tarumã, Manaus/AM, 69041-000 <b>AMAPÁ </b> Aeroporto Internacional de Macapá Alberto Alcolumbre, (96) 3225-8300, Rua Hildemar Maia, S/N, Jesus de Nazaré, Macapá/AP, 68908-119 <b>PARÁ </b> Aeroporto Internacional de Belém/Val-de-Cans Júlio Cezar Ribeiro, (91) 3210-6000, Avenida Júlio César, s/n, Val-de-Cans, Belém/PA, 66115-970 <b>RONDÔNIA </b> Aeroporto Internacional de Porto Velho - Governador Jorge Teixeira de Oliveira, (69) 3219-745, Avenida Governador Jorge Teixeira, S/N, Aeroporto, Porto Velho/RO, 76803-970 <b>RORAIMA </b> Aeroporto Internacional de Boa Vista Atlas Brasil Cantanhede (BVB), (95) 3198-0144, Praça Santos Dumont, 100 angar gollog, Aeroporto, Boa Vista/RR, 69304-650 <b>TOCANTINS </b> Aeroporto Brigadeiro Lysias Rodrigues, (63) 3219-3700, Avenida Joaquim Teotônio Segurado, s/n - Plano Diretor Expansão Sul, Palmas/TO, 77061-900
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustPlanSecond'>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Aeroportos do Nordeste</Accordion.Header>
                                <Accordion.Body>
                                   <b> ALAGOAS </b> Aeroporto Internacional de Maceió, (82) 3036-5200, Rodovia BR, 104 Km 91 - Tabuleiro do Pinto, Rio Largo/AL, 57100-971
                                    <b> BAHIA </b> Aeroporto Internacional de Salvador Deputado Luís Eduardo Magalhães, (71) 3204-1000, Praça Gago Coutinho, S/N, São Cristóvão, Salvador/BA, 41510-045 <b>CEARÁ </b> Aeroporto Internacional de Fortaleza - Pinto Martins, (85) 3392-1030, Avenida Senador Carlos Jereissati, 3000, Serrinha, Fortaleza /CE, 60741-900 <b>MARANHÃO </b> Aeroporto Internacional de São Luís Marechal Cunha Machado, (98) 3217-6138, Avenida dos Libaneses, 3503 - Tirirical, São Luís - MA, 65056-480 <b>PARAÍBA </b> Aeroporto Internacional de João Pessoa Presidente Castro Pinto, (83) 3041-4200, Avenida Marechal Rondon, s/n, Bayeux/PB, 58308-901 <b> PERNAMBUCO </b> Aeroporto Internacional do Recife/Guararapes Gilberto Freyre, (81) 3322-4188, Praça Min. Salgado Filho, s/n - Imbiribeira, Recife/PE, 51210-902 <b>PIAUÍ </b> Aeroporto de Teresina Senador Petrônio Portella, (86) 3133-6270, Avenida Centenário, Aeroporto, Teresina/PI, 64006-012 <b>RIO GRANDE DO NORTE </b> Aeroporto Internacional de Natal, (84) 3343-6060, Avenida Dr. Ruy Pereira dos Santos, 3100, Aeroporto, São Gonçalo do Amarante/RN, 59290-000
                                    <b> SERGIPE </b> Aeroporto Internacional de Aracaju Santa Maria, (79) 3212-8500,  Av. Sen. Júlio César Leite, 1440, Aeroporto, Aracaju/SE, 49037-580
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustPlanSecond'>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Aeroportos do Centro-Oeste</Accordion.Header>
                                <Accordion.Body>
                                    <b>DISTRITO FEDERAL </b> Aeroporto Internacional de Brasília, (61) 3364-9000, Lago Sul, Brasília/DF, 71608-900 <b>GOÍAS </b> Aeroporto de Goiânia, (62) 3265-1500, Alameda 4, s/n - Santa Genoveva, Goiânia/GO
                                    <b> MATO GROSSO </b> Aeroporto Internacional de Cuiabá Marechal Rondon, (65) 3614-2500, Avenida João Ponce de Arruda, s/n, Vila Pirineu, Várzea Grande/MT, 78110-900 <b>MATO GROSSO DO SUL </b> Aeroporto Internacional de Campo Grande, (67) 3368-6000, Avenida Duque de Caxias, s/n - Vila Serradinho, Campo Grande/MS, 79101-901
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustPlanSecond'>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Aeroportosr do Sudeste</Accordion.Header>
                                <Accordion.Body>
                                    <b>ESPÍRITO SANTO </b> Aeroporto de Vitória Eurico de Aguiar Salles, (27) 3235-6300, Avenida Roza Helena Schorling Albuquerque, s/n, Aeroporto, Vitória/ES, 29075-685 <b>MINAS GERAIS </b> Aeroporto Internacional de Confins Tancredo Neves, (31) 3689-2700, LMG-800 Km 7,9 s/n, Confins/MG, 33500-900 <b>SÃO PAULO</b> Aeroporto do Campo de Marte, (11) 2223-3701, Avenida Santos Dumont, 1979 - Santana, São Paulo/SP, 02012-010 <b>RIO DE JANEIRO </b> RIOgaleão Aeroporto Internacional Tom Jobim, (21) 3004-6050, Avenida Vinte de Janeiro, s/n, Ilha do Governador, Rio de Janeiro/RJ, 21941-900
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustPlanSecond'>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Aeroportos do Sul</Accordion.Header>
                                <Accordion.Body>
                                    <b>PARANÁ </b> Aeroporto Internacional Afonso Pena, (41) 3381-1515, Avenida Rocha Pombo, Águas Belas, São José dos Pinhais/PR, 83010-900
                                    <b> SANTA CATARINA </b> Aeroporto Internacional de Florianópolis Hercílio Luz, (48) 3331-4000, Rodovia Ac. ao Aeroporto, 6.200 - Carianos, Florianópolis/SC, 88047-902 <b>RIO GRANDE DO SUL </b> Aeroporto Internacional Porto Alegre Salgado Filho, (51) 3358-2000, Avenida Severo Dullius, 90.010 - Anchieta, Porto Alegre - RS, 90200-310
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    </Accordion>
                </div>
            </div>
        </Fragment >
    )
}

export default Plansecond
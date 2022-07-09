import React, { Fragment } from 'react'
import { Accordion } from 'react-bootstrap'
import "../Uteisfourth/Uteisfourth.css"

function Uteisfourth() {
    return (
        <Fragment>
            <div className='containerUteisFourth'>
                <div className='hospedagemUteisFourth'>Assistência em Caso de Emergência</div>
                <div className='scrollUteisFourth'>
                    <Accordion >
                        <div className='adjustUteisFourth'>
                            <Accordion.Item eventKey="0">
                                <div className='sombra'>
                                    <Accordion.Header>Disque 180: Central de Atendimento para a Mulher  </Accordion.Header>
                                </div>
                                <Accordion.Body>
                                A Secretaria Especial de Políticas para Mulheres (Ministério da Justiça) oferece uma linha direta gratuita para receber relatos de violência contra mulheres, para orientá-las sobre os seus direitos e a legislação atual, e encaminhá-las aos serviços locais quando necessário.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="1">
                                <div className='sombra'>
                                    <Accordion.Header>Disque 181: Disque Denúncia</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                Linha direta gratuita para relatar crimes e agressões caso você deseje permanecer ANÔNIMO.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="2">
                                <div className='sombra'>
                                    <Accordion.Header>Disque 190: Polícia Militar</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                Linha direta gratuita para relatar emergências, ex. crimes, agressões, proteção de cidadãos em risco, ameaças à vida, relatos de furtos e atentados à segurança pública. Você também pode usar esse número para contatar o Serviço de Bombeiros.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="3">
                                <div className='sombra'>
                                    <Accordion.Header>Disque 192: Ambulância Pública (SAMU)</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                Chame uma ambulância pública para um atendimento de emergência. Você deve dizer: 1 – o que aconteceu com o paciente; 2 – o endereço e uma referência do lugar; 3 – informações do paciente, como nome, idade e sexo.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="4">
                                <div className='sombra'>
                                    <Accordion.Header>Disque 193: Corpo de Bombeiros </Accordion.Header>
                                </div>
                                <Accordion.Body>
                                O Corpo de Bombeiros brasileiro age em casos de incêndio, acidentes com animais, vazamentos de gás, produtos químicos e desastres naturais como enchentes e queimadas.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    </Accordion>
                </div>
            </div >
        </Fragment>
    )
}
export default Uteisfourth
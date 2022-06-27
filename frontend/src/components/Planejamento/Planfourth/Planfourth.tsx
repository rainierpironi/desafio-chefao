import React, { Fragment } from 'react'
import { Accordion } from 'react-bootstrap'
import "../Planfourth/Planfourth.css"

function Planfourth() {
  return (
    <Fragment>
<div className='containerFourth'>
                <div className='hospedagemPlan'>Hospedagens</div>
                <div className='scrollHospedagem'>
                    <Accordion >
                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="0">
                                <div className='sombra'>
                                    <Accordion.Header>Indivudual</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>


                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="1">
                                <div className='sombra'>
                                    <Accordion.Header>Coletiva</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>

                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="2">
                                <div className='sombra'>
                                    <Accordion.Header>Voluntariado em troca de hospedagem</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    </Accordion>




                </div>




            </div >






    </Fragment>
  )
}

export default Planfourth
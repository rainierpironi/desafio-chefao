import React, { Fragment } from 'react'
import { Accordion } from 'react-bootstrap'
import "../../Culturais/Culturaisthird/Culturaisthird.css"

function Culturaisthird() {
    return (
        <Fragment>
            <div className='containerThird'>
                <div className='milhasPlan'>Milhas Aéreas</div>
                <div className='scrollMilhas'>
                    <Accordion >
                        <div className='adjustPlan'>
                            <Accordion.Item eventKey="0">
                                <div className='sombra'>
                                    <Accordion.Header>Norte</Accordion.Header>
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
                                    <Accordion.Header>Nordeste</Accordion.Header>
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
                                    <Accordion.Header>Centro-Oeste</Accordion.Header>
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
                            <Accordion.Item eventKey="3">
                                <div className='sombra'>
                                    <Accordion.Header>Sudeste</Accordion.Header>
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
                            <Accordion.Item eventKey="4">
                                <div className='sombra'>
                                    <Accordion.Header>Sul</Accordion.Header>
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
export default Culturaisthird